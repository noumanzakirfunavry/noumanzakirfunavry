'use strict';
const roles =  require('./roles.seeder');
const users = require('./user.seeder'); 
const rights = require('./rights.seeder'); 
const userRights = require('./user.rights.seeder')
const siteConfiguration = require('./site.configuration.seeder')
const categories = require('./categories.seeder'); 
module.exports = {
 
  async up(queryInterface, Sequelize) {
    await rights.addRights(queryInterface)
    await roles.addRoles(queryInterface)
    await users.addUsers(queryInterface)
    await userRights.addUserRights(queryInterface)
    await siteConfiguration.addSiteConfiguration(queryInterface)
    await categories.addCategories(queryInterface)
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
