

  async function addRights(queryInterface) {
    return await queryInterface.bulkInsert('Rights', [
      {
        title: "CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "GET",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  }
module.exports = { addRights}