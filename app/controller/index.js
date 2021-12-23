"use strict";

const Controller = require("egg").Controller;

class IndexController extends Controller {
  async echo() {
    const { ctx } = this;
    ctx.body = {
        code:200,
        msg:'请求成功'
    }
  }
}

module.exports = IndexController;
