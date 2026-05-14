import express from "express";
import cors from "cors";

import schedulerRoutes from "./routes/schedulerRoutes.js";

import priorityInboxRoutes from "./routes/priorityInboxRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", schedulerRoutes);

app.use("/api", priorityInboxRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
