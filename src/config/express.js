import express from "express";
import morgan from "morgan";
import cors from "cors";

import usersRoutes from "../routes/users.routes";
import rolesRoutes from "../routes/roles.routes";
import authRoutes from "../routes/auth.routes";
import animesRoutes from "../routes/animes.routes";
import categoriesRoutes from '../routes/categories.routes';
import seasonsRoutes from '../routes/seasons.routes';
import episodesRoutes from '../routes/episodes.routes';

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
app.use("/animes", animesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/seasons", seasonsRoutes);
<<<<<<< HEAD
app.use("/episodes", episodesRoutes);
=======
>>>>>>> 399c930baa6415f0d68a42a53441fcce6131120c

export default app;
