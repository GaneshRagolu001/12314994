
import { Log } from "../utils/logger.js";

export const runScheduler = async () => {
  try {
    await Log("backend", "info", "service", "Scheduler service started");

    return {
      success: true,
      message: "Scheduler initialized",
    };
  } catch (error) {
    await Log("backend", "error", "service", error.message);

    throw error;
  }
};
