const siteUrl = "https://site-staging.cnbcarabia.com/"

module.exports = {
    siteUrl,
    generateRobotsTxt : true,
    exclude: ['/sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
        'https://site-staging.cnbcarabia.com/sitemap.xml', // <==== Add here
        ],
    },
}
