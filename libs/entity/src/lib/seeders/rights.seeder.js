

  async function addRights(queryInterface) {
    return await queryInterface.bulkInsert('Rights', [
      {
        title: "NEWS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "NEWs_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "NEWS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "QUICKLINKS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "QUICKLINKS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "QUICKLINKS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TAGS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TAGS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TAGS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "INFOGRAPHICS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "INFOGRAPHICS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "INFOGRAPHICS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PROGRAMS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PROGRAMS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PROGRAMS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CATEGORIES_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CATEGORIES_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CATEGORIES_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CAREERS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CAREERS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CAREERS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADMINS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADMINS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADMINS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PAGES_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PAGES_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "PAGES_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "LIVESTREAM_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "LIVESTREAM_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "LIVESTREAM_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TVSCHEDULE_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TVSCHEDULE_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "TVSCHEDULE_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ANNOUNCEMENTS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ANNOUNCEMENTS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ANNOUNCEMENTS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADDRESSES_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADDRESSES_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ADDRESSES_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "GOOGLEANALYTICS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        title: "BANNERS_CREATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BANNERS_UPDATE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BANNERS_DELETE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  }
module.exports = { addRights}