"use strict";
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import { createHash } from "crypto";
import { rounds, algorithm } from "../config/auth";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //TODO: Relaciones
      this.belongsTo(models.roles, {
        foreignKey: "role_id",
        targetKey: "id",
      });
    }

    async hashPassword() {
      const shaPassword = createHash("sha256")
        .update(this.password)
        .digest("hex");
      let passwordHash = hashSync(shaPassword, genSaltSync(rounds));
      this.password = `${algorithm}$${passwordHash}`;
    }

    async validatePassword(password) {
      const hashPassword = this.password.substring(
        algorithm.length + 1,
        this.password.length
      );
      const shaPassword = createHash("sha256").update(password).digest("hex");
      return compareSync(shaPassword, hashPassword);
    }
  }
  users.init(
    {
      first_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING(150),
        unique: true,
      },
      email: {
        type: DataTypes.STRING(254),
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(128),
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      is_superuser: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_staff: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      date_joined: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
      tableName: "users", // TODO: Siempre agregar el nombre de la tabla
    }
  );
  return users;
};
