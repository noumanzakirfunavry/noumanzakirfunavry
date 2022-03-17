
    async function addSiteConfiguration(queryInterface){
        console.log("la here");
        return  await queryInterface.bulkInsert('SiteConfigurations', [
             {
                trendingNewsCount: 4,
                quickLinksCount: 6,
                featuredNewsCount: 5,
                editorsChoiceCount: 6,
                liveTvlink: "https://funavry.atlassian.net/",
                googleAnalyticsLink: "https://funavry.atlassian.net/",
                cnbcEmail: "https://funavry.atlassian.net/",
                googleTag: "https://funavry.atlassian.net/",
                alexaConfigurationJson: "https://funavry.atlassian.net/",
                enableAnalytics: true,
                googleSecretkey: "https://funavry.atlassian.net/",
                googleSiteKey: "https://funavry.atlassian.net/",
                googleEmbeddedLink: "https://funavry.atlassian.net/",
                hrEmail : "hr@funavry.com",
                departmentEmail : "department@funavry.com",
               createdAt: new Date(),
               updatedAt: new Date()
             }
           ], {});
     }
 
 
 module.exports = { addSiteConfiguration}