import express from "express";
import morgan from "morgan";
import cors from "cors";

import usersRoutes from "../routes/users.routes";
import rolesRoutes from "../routes/roles.routes";
import authRoutes from "../routes/auth.routes";

const app = express();
app.use(morgan(process.env.NODE_LOG || "dev"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Rutas
app.use("/users", usersRoutes);
app.use("/roles", rolesRoutes);
app.use("/auth", authRoutes);

export default app;
