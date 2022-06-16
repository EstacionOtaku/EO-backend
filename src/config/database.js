import Sequelize from "sequelize";
// import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la Base de datos
  process.env.DB_USER, // Usuario de la Base de datos
  process.env.DB_PASSWORD, // Contraseña de la Base de datos
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

