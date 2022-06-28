"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "users",
          "role_id",
          {
            type: Sequelize.DataTypes.INTEGER,
            // TODO: Crear FK
            references: {
              model: "roles",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          { transaction: t }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("users", "role_id", { transaction: t }),
      ]);
    });
  },
};
