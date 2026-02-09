import { Schema, model } from "mongoose";

const AddTestSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    testNames: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const AddTest = model("AddTest", AddTestSchema);
