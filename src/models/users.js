import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const usersModel = sequelize.define(
  "users", //nombre de la tabla
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
  }
);
