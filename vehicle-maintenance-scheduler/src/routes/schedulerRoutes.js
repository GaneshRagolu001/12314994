import express from "express";

import { optimizeSchedule } from "../controllers/schedulerController.js";

const router = express.Router();

router.get("/optimize-schedule", optimizeSchedule);

export default router;
