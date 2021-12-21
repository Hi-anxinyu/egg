'use strict';

const Service = require('egg').Service;

class ShanksService extends Service {
  async getInfo(id) {
    return {
        id:id,
        name:'张三丰',
        age:1000
    }
  }
}

module.exports = ShanksService;
