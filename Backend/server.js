const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const AnandLabData = require("./models/AnandLabData.js");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
mongoose
  .connect("mongodb://localhost:27017/AnandLabDatabase")
  .then((res) => console.log("express connected to mongoose"))
  .catch((err) => console.log(err));

app.post("/formdata", async (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;
  const data_1 = new AnandLabData({
    name,
    email,
    phoneNumber,
    subject,
    message,
  });
  try {
    await data_1.save();
    res.send("Data send successfully");
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log("Server run successfully");
});
