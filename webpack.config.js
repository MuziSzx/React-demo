//向外暴露一个打包的配置对象，    因为webpack是基于node构建的，所以webpack支持所有的NODe api和语法
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");  //导入 在内存中自动生成index页面插件
//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,"./src/index.html"),//源文件
    filename: 'index.html'  //生成的内存中首页的名称
})

module.exports = {
    mode:'development',//development 开发环境  production  线上环境
    // entry:'./src/main.js'
    //在webpack 4、x 中，有一个很大的问题，就是约定大于配置，  约定，默认的打包入口路径是 src -->index.js
    plugins:[
        htmlPlugin
    ]
}



// 如果chorme浏览器支持哪些，则node就支持这些