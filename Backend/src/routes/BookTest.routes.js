import { Router } from "express";
const router = Router();

import {
  sendOtp,
  verifyOtp,
  payment,
} from "../controllers/BookingTest.controllers.js";
router.route("/send-otp").post(sendOtp);
router.route("/verify-otp").post(verifyOtp);
router.route("/payment").post(payment);

export default router;
