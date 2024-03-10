const path = require("path");
const { defineConfig } = require("@vue/cli-service");
function resolve(dir) {
  return path.join(__dirname, dir); // __dirname获取当前问价按所在的路径
}
module.exports = defineConfig({
  transpileDependencies: true, // 如果选择true，那么项目引用node_modules中的包也会用Bable来编译
  outputDir: "build",
  assetsDir: "static",
  publicPath: process.env.NODE_ENV === "production" ? "/my-app/" : "/",
  chainWebpack: (config) => {
    // 1. 为路径起别名
    config.resolve.alias
      // 2. @别名代表的路径是：指向当前项目的src目录
      .set("@", resolve("src"))
      // 3. components别名代表的路径是：指向当前项目src目录下的components目录
      .set("components", resolve("src/components"));
  },
});
