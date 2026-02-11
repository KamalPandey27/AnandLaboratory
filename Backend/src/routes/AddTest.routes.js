import { Router } from "express";
import {
  AddTestData,
  getAllTest,
  updateTests,
} from "../controllers/AddTest.controllers.js";
const router = Router();

router.route("/add-blood-test").post(AddTestData);
router.route("/get-all-tests").get(getAllTest);
router.route("/update-tests").patch(updateTests);
export default router;
