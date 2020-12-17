'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        name: "Admin",
        email: "unsircle@mail.com",
        password: "unsircle",
        userPolicies: ["View", "Add", "Edit", "Delete"],
        itemPolicies: ["View", "Add", "Edit", "Delete"],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
