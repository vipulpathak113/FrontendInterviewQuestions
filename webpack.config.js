var HtmlWebpackPlugin = require("html-webpack-plugin");
var package = require("../package.json");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { // Here instead of one entry file we can use multiple entry file and created different chunk based on it
    vendor: Object.keys(package.dependencies),
    app: "./src/scripts/app.js",
    settings: "./src/scripts/settings.js",
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].bundle.js", // [] means dynamic name and will be as per input file name
  
  },
  watch: true, // watch for changes and build the bundle as per changes
  resolve: { extensions: [".js", ".ts"] }, // during import don't need to use extensions
  devServer: { // to run the server locally and serve the files from dist folder and HMR will be enabled
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({ // without ExtractTextPlugin it will be injected in <style> tag 
          // and with use of plugin it will be injected in <link> tag and it will be extracted to a file 
          fallback: "style-loader", // inject css file in to HTML
          use: ["css-loader", "sass-loader"], // sass-loader to convert scss to css 
        }),
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader", // convert image to base64 string if file size is within limit and inject it in to HTML
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]", // if file size exceeds limit then it is passed to file-loader which create seperate file in dist folder with hashed file name 
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: "app.bundle.css" }),
    new CommonsChunkPlugin({ // if a file is common to multiple chunks then it will be extracted to a seperate file and injected in to HTML
      name: "shared",
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
      hash: true, // create  hash for the file name to avoid cache busting
      title: "My Awesome application",
      myPageHeader: "Hello World",
      template: "./src/index.html",
      chunks: ["vendor", "shared", "app"], // mentioned which chunk to injected in <script> in HTML
      path: path.join(__dirname, "../dist/"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: "My Awesome application",
      myPageHeader: "Settings",
      template: "./src/index.html",
      chunks: ["vendor", "shared", "settings"],
      path: path.join(__dirname, "../dist/"),
      filename: "settings.html",
    }),
    new CopyWebpackPlugin([{ from: "src/images", to: "images" }]), // copy images that from src to dist folder
  ],
};
