'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.animes,{
        foreignKey: 'category_id',
      });
    }
  }
  categories.init({
    name: {
      type: DataTypes.STRING(120),
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
   {
    sequelize,
    modelName: 'categories',
    underscored: true,
    tableName: 'categories',
  });
  return categories;
};