const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

let accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJnYW5lc2hyYWdvbHUyM0BscHUuaW4iLCJleHAiOjE3Nzg3NTg5ODYsImlhdCI6MTc3ODc1ODA4NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA4YzQzYmFlLTI4YTgtNDg0Yi1hOTI0LTk4ZDc3Nzk3MWI3YiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhZ29sdSBnYW5lc2giLCJzdWIiOiIwYmY4OTg4Ni0xNWZmLTRjN2YtODJiNS1hZGYyN2Q4MzhjN2YifSwiZW1haWwiOiJnYW5lc2hyYWdvbHUyM0BscHUuaW4iLCJuYW1lIjoicmFnb2x1IGdhbmVzaCIsInJvbGxObyI6IjEyMzE0OTk0IiwiYWNjZXNzQ29kZSI6IlRSdlpXcSIsImNsaWVudElEIjoiMGJmODk4ODYtMTVmZi00YzdmLTgyYjUtYWRmMjdkODM4YzdmIiwiY2xpZW50U2VjcmV0IjoiVkpyd1RCWUVHZ3RjUmtTZyJ9.uEcXbXo8a0E79AaaGfKeCCQfDNZcbCfOZ_5GA40olzs";

const setAccessToken = (token) => {
  accessToken = token;
};

const Log = async (
  stack,
  level,
  packageName,
  message,
) => {

  try {

    const response = await axios.post(
      `${BASE_URL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;

  } catch (error) {

    console.error(
      error.response?.data || error.message,
    );

  }
};

module.exports = {
  Log,
  setAccessToken,
};