async function addCategories(queryInterface) {
  return await queryInterface.bulkInsert(
    'Categories',
    [
      {
        title: 'أخبار الأسهم/Stock News',
        displayInHomePage: true,
        displayInCategoryMenu: true,
        isActive: true,
        publishedBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'أخبار السوق/Market News',
        displayInHomePage: true,
        displayInCategoryMenu: true,
        isActive: true,
        publishedBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}

module.exports = { addCategories };
