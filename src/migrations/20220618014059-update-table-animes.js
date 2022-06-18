"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "animes",
          "category_id",
          {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model:'categories',
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

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("animes", "category_id", { transaction: t }),
      ]);
    });
  },
};
