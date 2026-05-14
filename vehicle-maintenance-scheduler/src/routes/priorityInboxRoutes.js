import express from "express";

import { getPriorityInbox } from "../services/priorityInboxService.js";

const router = express.Router();

router.get("/priority-inbox", async (req, res) => {
  try {
    const notifications = await getPriorityInbox();

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
