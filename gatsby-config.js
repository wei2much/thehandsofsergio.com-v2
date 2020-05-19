module.exports = {
  siteMetadata: {
    title: `The Hands Of Sergio`,
    siteUrl: `https://thehandsofsergio.com`,
    description: `The Hands Of Sergio is a professional remedial massage service based in Sydney, Australia. The masseur Sergio is from Tenerife, Spain who specializes in remedial massage, Zenthai massage and Reiki. Sergio has been operating his massage service in Sydney since early 2019 and in less than a year, his outstanding technique combined with genuine caring spirit has been forged into his brand. The number of repeating clients have grown from single-digit to over 50 in less than 6 months.`,
    author: `@wei2much`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
