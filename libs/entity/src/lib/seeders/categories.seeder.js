async function addCategories(queryInterface) {
  return await queryInterface.bulkInsert(
    'Categories',
    [
      {
        title: 'أحدث أخبار الأسواق',
        displayInHomePage: true,
        displayInCategoryMenu: true,
        isActive: true,
        publishedBy: 1,
      },
			{
        title: 'أحدث أخبار الأسهم',
        displayInHomePage: true,
        displayInCategoryMenu: true,
        isActive: true,
        publishedBy: 1,
      },
    ],
    {}
  );
}

module.exports = { addCategories };
