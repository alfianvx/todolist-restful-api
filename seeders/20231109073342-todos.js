"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "sleep",
      },
      {
        value: "eat",
      },
      {
        value: "code",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
