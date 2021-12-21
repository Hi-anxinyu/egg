# egg



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### 目录结构

- app 项目主要开发目录
    - controller 控制器目录
    - router.js  项目的路由配置文件

- config 项目的配置目录
    - config.default.js 项目配置文件
    - plugin.js         插件配置文件

- test 项目单元测试使用的文件

### 脚本命令
 - start 生产环境使用，也就是开发完成部署到线上的时候，拥有守护进程，终端不会被占用，一般不会掉线，修改代码之后需要重启服务。
 - dev   开发环境使用，修改代码不需要重启服务。
 - stop  用来停止服务。