import { runScheduler } from "../services/schedulerService.js";

import { Log } from "../utils/logger.js";

export const optimizeSchedule = async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "handler",
      "Optimize schedule endpoint invoked",
    );

    const result = await runScheduler();

    res.status(200).json(result);
  } catch (error) {
    await Log("backend", "error", "handler", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
