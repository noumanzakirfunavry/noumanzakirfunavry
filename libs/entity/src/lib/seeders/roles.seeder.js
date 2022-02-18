

  async function addRoles(queryInterface) {
    return await queryInterface.bulkInsert('Roles', [
      {
        title: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }
module.exports = { addRoles}