import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { BookTest } from "../models/BookTest.models.js";
import crypto from "crypto";
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtp = asyncHandler(async (req, res) => {
  const {
    name,
    age,
    gender,
    email,
    phoneNumber,
    date,
    address,
    message,
    testId,
  } = req.body;

  if (
    !address?.trim() ||
    !name?.trim() ||
    !gender ||
    !phoneNumber?.trim() ||
    !message?.trim() ||
    !testId ||
    age === undefined ||
    age === null
  ) {
    throw new ApiError(400, "Fill all the details");
  }

  const OTP = generateOTP();
  const hashedOTP = crypto.createHash("sha256").update(OTP).digest("hex");

  const booking = await BookTest.create({
    name,
    age,
    gender,
    email,
    phoneNumber,
    date,
    message,
    address,
    testDetails: testId,
    otp: hashedOTP,
    otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { bookingId: booking._id, OTP: OTP },
        "OTP Sent successfully",
      ),
    );
});

const verifyOtp = asyncHandler(async (req, res) => {
  const { bookingId, otp } = req.body;

  if (!bookingId || !otp) {
    throw new ApiError(400, "Booking ID and OTP are required");
  }

  const booking = await BookTest.findById(bookingId).populate("testDetails");

  if (!booking) {
    throw new ApiError(404, "Booking not found");
  }

  if (!booking.otpExpiresAt || booking.otpExpiresAt < new Date()) {
    throw new ApiError(400, "OTP expired");
  }

  const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");

  if (hashedOTP !== booking.otp) {
    throw new ApiError(400, "Invalid OTP");
  }

  booking.isOtpVerified = true;
  booking.otp = undefined;
  booking.otpExpiresAt = undefined;
  await booking.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        bookingId: booking._id,
        userDetails: {
          name: booking.name,
          age: booking.age,
          gender: booking.gender,
          phoneNumber: booking.phoneNumber,
          email: booking.email,
          address: booking.address,
        },
        bookingDate: booking.dateOfBooking,
        message: booking.message,
        testDetails: {
          testId: booking.testDetails._id,
          title: booking.testDetails.title,
          price: booking.testDetails.price,
          testNames: booking.testDetails.testNames,
        },
      },
      "OTP verified successfully",
    ),
  );
});

const payment = asyncHandler(async (req, res) => {
  const { bookingId, paymentMethod } = req.body;

  if (!bookingId || !paymentMethod) {
    throw new ApiError(400, "Select payment mode");
  }

  const booking = await BookTest.findById(bookingId);

  if (!booking) {
    throw new ApiError(404, "Booking not found");
  }

  if (!booking.isOtpVerified) {
    throw new ApiError(403, "Verify OTP before payment");
  }

  if (booking.paymentStatus === "paid") {
    throw new ApiError(400, "Payment already completed");
  }

  booking.paymentMode = paymentMethod;
  booking.paymentStatus = "paid";
  booking.bookingStatus = "confirmed";

  await booking.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        bookingId: booking._id,
        paymentMode: booking.paymentMode,
        paymentStatus: booking.paymentStatus,
        bookingStatus: booking.bookingStatus,
      },
      "Your booking is confirmed. Our team will contact you shortly.",
    ),
  );
});

export { sendOtp, verifyOtp, payment };
