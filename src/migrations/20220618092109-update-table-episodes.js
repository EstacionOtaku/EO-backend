'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "episodes",
          "season_id",
          {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model:'seasons',
              key:'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          { transaction: t }
        ),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("episodes", "season_id", { transaction: t }),
      ]);
    });
  },
};
