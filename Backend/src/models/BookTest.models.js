import mongoose, { Schema, model } from "mongoose";

const BookTestSchema = new Schema(
  {
    // User details
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    // Booking info
    testDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddTest",
      required: true,
    },
    dateOfBooking: {
      type: Date,
      default: Date.now,
    },
    message: {
      type: String,
      trim: true,
    },

    // OTP verification
    otp: {
      type: String,
    },
    otpExpiresAt: {
      type: Date,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },

    // Payment
    paymentMode: {
      type: String,
      enum: ["upi", "card", "cash", "netbanking"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    // Booking status
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const BookTest = model("BookTest", BookTestSchema);
