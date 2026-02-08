import { Router } from "express";
const router = Router();

import { contact } from "../controllers/Contact.controllers.js";
router.route("/contact-us").post(contact);

export default router;
