import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    phoneNumber: {
      type: String,
      required: true,
      match: [/^[6-9][0-9]{9}$/, "Please use a valid phone number"],
    },

    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },

    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    date: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["booked", "collected", "testing", "completed"],
      default: "booked",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Booking", bookingSchema);
