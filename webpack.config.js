const path = require('path');

module.exports = {

  // str | obj | arr
  // Where webpack starts exec
  entry: "./entry.js",

  // Where compilation/results go
  output: {

    // must be absolute path
    // str
    path: path.resolve(__dirname, "dist"),

    // str
    filename: "bundle.js",

    // public path relative to index page
    // str
    publicPath: "/assets/",

    // filename template of src map location (adding /srcmap/[file].map is ok)
    // str -- required?
    sourceMapFilename: "[file].map",

    // Not sure if this is right
    // devtoolModuleFilenameTemplate: "webpack:///[.node_modules/webpack/bin/webpack"

    // Looks interesting
    // crossOriginLoading: "use-credentials",
    // crossOriginLoading: "anonymous",
    // crossOriginLoading: false
  }

}
