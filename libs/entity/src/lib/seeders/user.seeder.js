
    async function addUsers(queryInterface){
       return  await queryInterface.bulkInsert('Users', [
            {
              name: 'Taaha',
              userName: 'taaha123',
              password: '123',
              email: 'taaha@yopmail.com',
              isActive: true,
              isProUser: true,
              rolesId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {});
    }


module.exports = { addUsers}