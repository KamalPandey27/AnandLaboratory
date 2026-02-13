import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Login from "../models/Login.models.js";
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Login.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  res.status(200).json(new ApiResponse(200, {}, "Login successful"));
});
export { login };
