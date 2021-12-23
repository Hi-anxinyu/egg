/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1640057684331_5866";

  // add your middleware config here
  config.middleware = [];
  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    mapping: {
      ".vue": "ejs",
      ".html": "ejs",
    },
  };
  config.ejs = {};
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: "localhost",
        // 端口号
        port: "3306",
        // 用户名
        user: "root",
        // 密码
        password: "root",
        // 数据库名
        database: "vote",
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
