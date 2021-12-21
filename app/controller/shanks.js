"use strict";

const Controller = require("egg").Controller;

class shanksController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "<h1>This is Shanks</h1>";
  }

  async eat() {
    const { ctx } = this;
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve((ctx.body = "<h1>异步单元测试</h1>"));
      }, 5000);
    });
  }

  //普通get传参
  async play() {
    const { ctx } = this;
    const { name, place, friend } = ctx.query;

    ctx.body = `我是${name},我今天和${friend}在${place}玩`;
  }

  //严格get传参
  async play2() {
    const ctx = this.ctx;
    const { name, place, friend } = ctx.params;
    ctx.body = `我是${name},我今天和${friend}在${place}玩`;
  }
}

module.exports = shanksController;
