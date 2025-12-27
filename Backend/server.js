const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const AnandLabData = require("./models/AnandLabData");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

/* =========================
   ✅ FIX 1: CREATE TRANSPORTER ONCE
========================= */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Gmail APP PASSWORD
  },
});

/* =========================
   ✅ FIX 2: VERIFY MAIL CONFIG
========================= */
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Mail error:", error);
  } else {
    console.log("✅ Mail server ready");
  }
});

// Form API
app.post("/formdata", async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message } = req.body;

    // 1️⃣ Save data to MongoDB
    const data = new AnandLabData({
      name,
      email,
      phoneNumber,
      subject,
      message,
    });

    await data.save();

    // 2️⃣ Respond SUCCESS immediately
    res.status(201).json({ message: "Form submitted successfully" });

    /* =========================
       ✅ FIX 3: SEND MAIL SAFELY
    ========================= */
    transporter.sendMail({
      from: `"Anand Lab" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Appointment: ${subject}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
