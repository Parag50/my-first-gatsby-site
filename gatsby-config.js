// gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-sass`, // For Sass/SCSS support
    {
      resolve: `gatsby-plugin-purgecss`, // To remove unused CSS
      options: {
        printRejected: true, // Debugging
        develop: false, // Enable purge in production builds
        tailwind: false, // Set to true if you're using Tailwind CSS
        ignore: ["/ignored-directory/"], // Ignore files or directories
      },
    },
  ],
};
