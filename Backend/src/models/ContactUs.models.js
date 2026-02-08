import mongoose, { Schema, model } from "mongoose";

const contactUsSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      trim: true,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Contact = model("Contact", contactUsSchema);
