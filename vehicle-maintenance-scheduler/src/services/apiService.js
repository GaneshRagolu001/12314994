import axios from "axios";

import { Log } from "../utils/logger.js";

import {
  depots as mockDepots,
  maintenanceTasks as mockTasks,
} from "../utils/mockData.js";

const BASE_URL = "https://mock-api.example.com";

export const fetchDepots = async () => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Fetching depots from external API",
    );

    const response = await axios.get(`${BASE_URL}/depots`);

    await Log("backend", "info", "service", "Depots fetched successfully");

    return response.data;
  } catch (error) {
    await Log(
      "backend",
      "warn",
      "service",
      "External depots API failed, using mock data",
    );

    return mockDepots;
  }
};

export const fetchMaintenanceTasks = async () => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Fetching maintenance tasks from external API",
    );

    const response = await axios.get(`${BASE_URL}/tasks`);

    await Log("backend", "info", "service", "Tasks fetched successfully");

    return response.data;
  } catch (error) {
    await Log(
      "backend",
      "warn",
      "service",
      "External tasks API failed, using mock data",
    );

    return mockTasks;
  }
};
