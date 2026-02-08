import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Contact } from "../models/ContactUs.models.js";
const contact = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;
  if (
    [name, email, phoneNumber, subject, message].some(
      (value) => String(value) === "",
    )
  ) {
    throw new ApiError(400, "Fill all the details");
  }

  const ContactData = await Contact.create({
    name,
    email,
    phoneNumber,
    subject,
    message,
  });

  if (!ContactData) {
    throw new ApiError(500, "Some thing went wrong while storing data in DB");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, ContactData, "Data is store in DB Successfully"),
    );
});

export { contact };
