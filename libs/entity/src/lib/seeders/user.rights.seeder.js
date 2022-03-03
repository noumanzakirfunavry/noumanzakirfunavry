

  async function addUserRights(queryInterface) {
    return await queryInterface.bulkInsert('UsersHasRights', [
      {
        usersId: 1,
        rightsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usersId: 1,
        rightsId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usersId: 1,
        rightsId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  }
module.exports = { addUserRights}