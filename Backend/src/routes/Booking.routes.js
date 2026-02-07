import { Router } from "express";

const router = Router();
import { BookTest } from "../controllers/booking.controllers.js";
router.route("/").post(BookTest);
export default router;
