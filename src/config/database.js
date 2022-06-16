import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME, //nombre de la base de datos
  process.env.DB_USER, //usuario de la base de datos
  process.env.DB_PASSWORD, //contraseña de la base de datos
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);
