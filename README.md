created by 1912 at 2019-11-21

#### 常用命令
```
npm install
npm start       // 项目启动
npm run build   // 打包部署
npm run eject   // 暴露webpack等配置文件
```


#### Redux数据架构

* redux
  * createStore,  用于创建唯一的store
  * combineReducers,  用于合并多个Reducer纯函数
  * applyMiddleware  使用中间件，比如使用redux-thunk来解决异步数据请求
* react-redux
  * <Provider store={store}>
  * connect(mapStateToProps, mapActionToProps)(UiComponent)
* redux-thunk
  * 来解决异步数据请求
  * 异步数据需要三个action  {type:'', payload: ''}
  * 同步数据只需要一个action

#### Webpack常用配置

* 设置 @ 绝对路径：在 /config/webpack.config.js 中配置
```
alias: {
  '@': path.resolve(__dirname, '../src')
},
```
* 修改devServer的端口号：在 /scripts/start.js 中配置
```
// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.HOST || '0.0.0.0';
```

#### 代理配置

* 官方参考链接：https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

* 代理配置实现
  * 第一步：安装插件`npm install http-proxy-middleware -S`
  * 第二步：在src目录下新建文件 setupProxy.js
  * 第三步：编写配置文件代码
  ```
  const proxy = require('http-proxy-middleware')
  module.exports = function(app) {
    app.use(
      '/soso',
      proxy({
        target: 'https://c.y.qq.com',
        changeOrigin: true,
      })
    )
  }
  ```
  * 第四步：重启项目即可。

#### UI

* 使用sass，先安装node-sass
* 使用rem，移动端布局
```js
<script type="text/javascript">
  function resetRootFZ(){
    var oHtml = document.querySelector('html');
    var w = oHtml.getBoundingClientRect().width;
    // 设置根字体的大小等于html节点的宽度的十分之一
    oHtml.style.fontSize = w/10 + 'px';
  };
  resetRootFZ();
  // 当window窗口尺寸变化时，重新设置根字体的大小
  window.addEventListener('resize',function(){
    resetRootFZ();
  });
</script>
```
* 使用Ant-Design-Mobile
  * 安装：`npm install antd-mobile --save`
  * 样式引入：`import 'antd-mobile/dist/antd-mobile.css'`
