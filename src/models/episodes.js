'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.seasons, {
        foreignKey: 'season_id',
        targetKey: 'id',
      });
    }
  }
  episodes.init(
    {
      name: {
        type: DataTypes.STRING(180),
        unique: true,
      },
      episode_number: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      duration: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      url:{
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      description:{
        type: DataTypes.STRING(255),
      },
  }, 
  {
    sequelize,
    modelName: 'episodes',
    underscored: true,
    tableName: "episodes",
  });
  return episodes;
};