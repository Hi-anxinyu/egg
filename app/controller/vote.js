"use strict";

const Controller = require("egg").Controller;

class VoteController extends Controller {
  async getList() {
    const { ctx } = this;
    ctx.body = await ctx.service.vote.getList();
  }
}

module.exports = VoteController;
