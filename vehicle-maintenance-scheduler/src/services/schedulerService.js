import { Log } from "../utils/logger.js";

import { fetchDepots, fetchMaintenanceTasks } from "./apiService.js";

import { optimizeTasks } from "../algorithms/knapsack.js";

export const runScheduler = async () => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Starting maintenance optimization",
    );

    const optimizedSchedules = [];
    const depots = await fetchDepots();

    const maintenanceTasks = await fetchMaintenanceTasks();

    for (const depot of depots) {
      await Log(
        "backend",
        "debug",
        "service",
        `Optimizing tasks for ${depot.name}`,
      );

      const result = optimizeTasks(maintenanceTasks, depot.mechanicHoursPerDay);

      optimizedSchedules.push({
        depotId: depot.id,

        depotName: depot.name,

        totalMechanicHours: depot.mechanicHoursPerDay,

        utilizedHours: result.totalHoursUsed,

        unusedHours: result.unusedHours,

        efficiency: result.efficiency,

        totalImpact: result.totalImpact,

        selectedTasks: result.selectedTasks,
      });
    }

    await Log(
      "backend",
      "info",
      "service",
      "Optimization completed successfully",
    );

    return {
      success: true,
      data: optimizedSchedules,
    };
  } catch (error) {
    await Log("backend", "error", "service", error.message);

    throw error;
  }
};
