const path = require("path");

module.exports = {
  entry: {
    mfunsAdvancedDanmaku: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    publicPath: "lib/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".vue", ".json"],
    alias: {
      src: path.join(__dirname, "./src"), // 这样@符号就表示项目根目录中src这一层路径
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 89192,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
