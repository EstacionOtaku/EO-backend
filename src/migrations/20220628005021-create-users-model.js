"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
first_name: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING(150),
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING(254),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(254),
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING(128),
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      is_superuser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_staff: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      date_joined: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
