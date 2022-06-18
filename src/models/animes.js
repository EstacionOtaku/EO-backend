"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class animes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.categories, {
        foreignKey: 'category_id',
        targetKey: 'id',
      });
    }
  }
  animes.init(
    {
      name: {
        type: DataTypes.STRING(180),
        unique: true,
      },
      front_image: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      sample_image: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "animes",
      underscored: true,
      tableName: "animes",
    }
  );
  return animes;
};
