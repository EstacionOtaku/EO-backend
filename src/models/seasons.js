'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seasons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.animes, {
        foreignKey: 'anime_id',
        targetKey: 'id',
      });
      this.hasMany(models.episodes, {
        foreignKey: 'season_id',
      });
    }
  }
  seasons.init({
    name: {
      type: DataTypes.STRING(180),
      allowNull: true,
    },
    is_active:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    anime_id:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'seasons',
    underscored: true,
  });
  return seasons;
};