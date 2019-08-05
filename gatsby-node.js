/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const merge = require("webpack-merge")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  function getOutput() {
    switch (stage) {
      case `develop`:
        return {
          filename: `[id].js`,
        }
      case `build-javascript`:
        return {
          filename: `[contenthash].js`,
          chunkFilename: `[contenthash].js`,
        }
    }
  }
  actions.replaceWebpackConfig(merge(getConfig(), { output: getOutput() }))
}
