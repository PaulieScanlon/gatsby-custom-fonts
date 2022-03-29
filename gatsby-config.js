module.exports = {
  siteMetadata: {
    title: 'gatsby-custom-fonts'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lobster:400', 'Inter:400,700'],
        display: 'swap'
      }
    }
  ]
};
