'use strict';

const Controller = require('egg').Controller;

class shanksController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>This is Shanks</h1>';
  }

  async eat() {
    const { ctx } = this;
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve((ctx.body = '<h1>异步单元测试</h1>'));
      }, 5000);
    });
  }
}

module.exports = shanksController;
