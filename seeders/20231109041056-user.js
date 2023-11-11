"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "joko",
        email: "joko@gmail.com",
        password: "jokochan",
      },
      {
        username: "kobo",
        email: "kobo@gmail.com",
        password: "kobohitam",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
