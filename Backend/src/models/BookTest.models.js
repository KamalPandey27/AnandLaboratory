import mongoose, { Schema, model } from "mongoose";

const BookTestSchema = new Schema({}, { timestamps: true });

export const BookTest = model("BookTest", BookTestSchema);
