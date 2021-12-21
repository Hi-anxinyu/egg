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
  - router.js 项目的路由配置文件
  - service 封装的抽象层，所有与数据库交互的代码全部放在 service 模块
    - 保持 controller 逻辑更加简单
    - 独立性，service 可以被多个 controller 进行复用
    - 写测试用例简单

- config 项目的配置目录

  - config.default.js 项目配置文件
  - plugin.js 插件配置文件

- test 项目单元测试使用的文件

### 脚本命令

- start 生产环境使用，也就是开发完成部署到线上的时候，拥有守护进程，终端不会被占用，一般不会掉线，修改代码之后需要重启服务。
- dev 开发环境使用，修改代码不需要重启服务。
- stop 用来停止服务。

### get 请求

#### 自由模式传参

- 地址栏明文拼接传参 如 /api?name=托尼&age=22
- 获取参数

```js
const { name, age } = ctx.query;
```

#### 严格传参模式

- 严格模式传参 路由路径规定参数 如 /api/:name/:age
- 获取参数

```js
const { name, age } = ctx.params;
```

### post 请求

- 使用 post 之前需要先在 config.default.js 文件里关闭 csrf 安全防范

```js
module.exports = {
    security:{
        csrf:{
            enable:false;
        }
    }
};
```

- 需要在 ctx.request.body 获取到参数
