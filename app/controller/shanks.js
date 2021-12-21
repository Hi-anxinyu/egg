"use strict";

const Controller = require("egg").Controller;

class shanksController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "<h1>This is Shanks</h1>";
  }
}

module.exports = shanksController;
