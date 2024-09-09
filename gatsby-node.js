// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false, // Disable default chunk splitting
        vendors: false, // Disable vendor chunk splitting
      },
    };
    config.optimization.runtimeChunk = false; // Disable runtime chunk splitting
    actions.replaceWebpackConfig(config);
  };
  