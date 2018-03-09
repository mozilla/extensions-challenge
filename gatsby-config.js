const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-77033033-8',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
