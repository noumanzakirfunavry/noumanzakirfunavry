

async function addRights(queryInterface) {
  return await queryInterface.bulkInsert('Rights', [
    {
      title: "Modify News",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      title: "Modify Quicklinks",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Tags",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Infographics",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Programs",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Categories",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Careers",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Pages",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Livestreams",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify TV Schedule",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      title: "Modify Announcements",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      title: "Modify Addresses",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Modify Google Analytics",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      title: "Modify Banners",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
}
module.exports = { addRights }