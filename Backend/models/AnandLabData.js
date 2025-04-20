const mongoose = require("mongoose");
const AnandLabDataSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  subject: String,
  message: String,
});
const AnandLabData = mongoose.model(
  "AnandLabData",
  AnandLabDataSchema,
  "AnandLabData"
);
module.exports = AnandLabData;
