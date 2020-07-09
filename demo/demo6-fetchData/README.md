# css资源处理

组件会在双端构建，客户端和服务端都需要进行相关配置处理解析样式。

客户端配置，使用如下loader：

- sass-loader: 将SCSS转成CSS。
- postcss-loader: 结合autoprefix为选择器增加浏览器前缀。
- css-loader: 解析CSS代码，主要是为了处理CSS中的依赖。
- mini-css-extract-plugin：将CSS提取为独立的文件。
- file-loader: 用于处理图片。

服务端配置：

服务端如果也配置了相关的loader，那么css代码也会被打包进JS文件中，就成了多余的无效代码。

可以使用ignore-loader忽略掉样式文件的引入，然后将服务端直出的HTML中引入样式文件。

操作步骤：

1. 编写样式，并引入。
2. 给客户端webpack配置相应loader。
3. 在服务端webpack配置中使用ignore-loader，忽略样式。
4. 在服务端直出的HTML中，引入第2步输出的样式文件。
5. 编译并运行服务



服务运行

```
yarn 
yarn run dev 
```
