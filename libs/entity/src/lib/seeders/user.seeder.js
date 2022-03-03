
    async function addUsers(queryInterface){
       return  await queryInterface.bulkInsert('Users', [
            {
              name: 'Taaha',
              userName: 'taaha123',
              password: '$2a$10$M9c92t/IpzIAiitRTGZJVO2zmrjKukE41l/kTow3cgH/pqVguDLA.',
              email: 'taaha@yopmail.com',
              isActive: true,
              rolesId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {});
    }


module.exports = { addUsers}