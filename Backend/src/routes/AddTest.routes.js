import { Router } from "express";
import { AddTestData, getAllTest } from "../controllers/AddTest.controllers.js";
const router = Router();

router.route("/add-blood-test").post(AddTestData);
router.route("/get-all-tests").get(getAllTest);
export default router;
