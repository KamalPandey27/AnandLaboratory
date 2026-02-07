import { asyncHandler } from "../utils/asyncHandler.js";
const BookTest = asyncHandler(async (req, res) => {
  const { name, email, age, phoneNumber, date, message, gender } = req.body;
  console.log(name, email, age, phoneNumber, date, message, gender);
});

export { BookTest };
