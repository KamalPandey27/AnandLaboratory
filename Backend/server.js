const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const AnandLabData = require("./models/AnandLabData.js");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL)
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

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to yourself
      subject: `New Appointment: ${subject}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.send("Data saved and email sent successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong.");
  }
});

app.listen(port, () => {
  console.log("Server run successfully");
});
