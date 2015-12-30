# angular-app - 基于angular的前端框架

基础结构是 bower + angular + Yeoman generator

目的是让angular的前端项目可以快速启动~



##快速开始

1. npm install
2. bower install
3. grunt run-dev //开发环境默认使用90001端口
4. grunt build-[:ngapp] //构架相应工程目录
5. grunt run-dist //预览构建后的项目，默认使用9002端口

##目录结构

    angular-app
      -src
        -img   全局图片
        -script   全局js
        -style   全局css
      -ngApp   工程目录
        -partial   模板
          index.html
          indexCtrl.js   控制器
          index.less   样式
        -services
          ngService.js   服务
        ngapp.js   路由文件
      -tasks   grunt配置文件
      Gruntfile.js
      index.html   入口页面
      
## 优化
- 添加gulp打包 ```2015年12月30```