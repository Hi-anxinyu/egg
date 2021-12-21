"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "你好，鸡蛋";
  }
  async shanks() {
    const { ctx } = this;
    ctx.body = '<h1>你好，香克斯</h1>'
  }
}

module.exports = HomeController;
