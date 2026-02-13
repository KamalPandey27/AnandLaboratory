import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { BookTest } from "../models/BookTest.models.js";
import crypto from "crypto";
import { sendEmail } from "../utils/SendMail.js";
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

  const booking = await BookTest.findById(bookingId).populate("testDetails");

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
  await sendEmail({
    to: process.env.EMAIL_USER,
    subject: "New Test Booking Received",
    html: `<p>A new test booking has been made with the following details:</p>
           <ul>
             <li><strong>Name:</strong> ${booking.name}</li>
             <li><strong>Age:</strong> ${booking.age}</li>
             <li><strong  >Gender:</strong> ${booking.gender}</li>  
              <li><strong>Phone Number:</strong> ${booking.phoneNumber}</li>
              <li><strong>Email:</strong> ${booking.email}</li>
              <li><strong>Address:</strong> ${booking.address}</li>
              <li><strong>Test:</strong> ${booking.testDetails.title}</li>
              <li><strong>Test:</strong> ${booking.testDetails.price}</li>
              <li><strong>Date of Booking:</strong> ${booking.dateOfBooking}</li>
              <li><strong>Message:</strong> ${booking.message}</li>
           </ul>
            <p>Please contact the customer to confirm the details and arrange for the test.</p>
            <p>Best regards,<br/>Car Rental Team</p>`,
  });

  await sendEmail({
    to: booking.email,
    subject: "Your Test Booking is Confirmed",
    html: `<p>Dear ${booking.name},</p>
           <p>Your booking for the test "${booking.testDetails.title}" has been confirmed.</p>
           <p>Booking Details:</p>
           <ul>
             <li><strong>Test:</strong> ${booking.testDetails.title}</li>
             <li><strong>Date:</strong> ${booking.dateOfBooking}</li>
             <li><strong>Address:</strong> ${booking.address}</li>
           </ul>  
            <p>Thank you for choosing our service. We will contact you shortly with further details.</p>
            <p>Best regards,<br/>Car Rental Team</p>`,
  });

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
