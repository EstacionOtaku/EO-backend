'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
      return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
          queryInterface.addColumn(
            "seasons",
            "anime_id",
            {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model:'animes',
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
        queryInterface.removeColumn("seasons", "anime_id", { transaction: t }),
      ]);
    });
  },
};
