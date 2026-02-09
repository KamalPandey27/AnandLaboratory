import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AddTest } from "../models/AddTest.models.js";
const AddTestData = asyncHandler(async (req, res) => {
  const { title, price, tests } = req.body;
  if (!title || !price || !tests.length > 0) {
    throw new ApiError(400, "Fill all details");
  }

  const testData = await AddTest.create({
    title,
    price,
    testNames: tests,
  });

  if (!testData) {
    throw new ApiError(500, "While storing Test Data error occured");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, testData, "Test Added Successfully"));
});

const getAllTest = asyncHandler(async (req, res) => {
  const allTests = await AddTest.find();
  return res
    .status(200)
    .json(new ApiResponse(200, allTests, "All Tests fetch successfully done"));
});

export { AddTestData, getAllTest };
