'use strict';
const roles =  require('./roles.seeder');
const users = require('./user.seeder'); 
module.exports = {
 
  async up(queryInterface, Sequelize) {

    await roles.addRoles(queryInterface)
    await users.addUsers(queryInterface)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
