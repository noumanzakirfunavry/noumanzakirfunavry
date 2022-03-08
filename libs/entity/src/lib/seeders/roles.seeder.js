

  async function addRoles(queryInterface) {
    return await queryInterface.bulkInsert('Roles', [
      {
        title: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Super_Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }
module.exports = { addRoles}