import { notifications } from "../utils/notifications.js";

import { Log } from "../utils/logger.js";

const TYPE_WEIGHTS = {
  placement: 5,
  exam: 4,
  result: 3,
  event: 2,
  general: 1,
};

const calculatePriority = (notification) => {
  const weight = TYPE_WEIGHTS[notification.type] || 1;

  const ageInSeconds = Math.floor(
    (Date.now() - new Date(notification.createdAt)) / 1000,
  );

  return weight * 100000 - ageInSeconds;
};

export const getPriorityInbox = async (topK = 3) => {
  try {
    await Log("backend", "info", "service", "Generating priority inbox");

    const rankedNotifications = notifications.map((notification) => ({
      ...notification,

      priorityScore: calculatePriority(notification),
    }));

    rankedNotifications.sort((a, b) => b.priorityScore - a.priorityScore);

    await Log(
      "backend",
      "info",
      "service",
      "Priority inbox generated successfully",
    );

    return rankedNotifications.slice(0, topK);
  } catch (error) {
    await Log("backend", "error", "service", error.message);

    throw error;
  }
};
