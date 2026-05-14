import { Log } from "./logger.js";

const testLogger = async () => {
  const response = await Log(
    "backend",
    "info",
    "service",
    "Logger initialized successfully",
  );

  console.log(response);
};

testLogger();
