
    async function addUsers(queryInterface){
       return  await queryInterface.bulkInsert('Users', [
            {
              name: 'Taaha',
              userName: '$2a$10$M9c92t/IpzIAiitRTGZJVO2zmrjKukE41l/kTow3cgH/pqVguDLA.',
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