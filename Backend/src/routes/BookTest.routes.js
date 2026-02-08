import { Router } from "express";
const router = Router();

import { sendOtp, verifyOtp } from "../controllers/BookingTest.controllers.js";
router.route("/send-otp").post(sendOtp);
router.route("/verify-otp").post(verifyOtp);
export default router;
