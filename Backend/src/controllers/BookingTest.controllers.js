import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { BookTest } from "../models/BookTest.models.js";

const sendOtp = asyncHandler(async (req, res) => {});
const verifyOtp = asyncHandler(async (req, res) => {});
export { sendOtp, verifyOtp };
