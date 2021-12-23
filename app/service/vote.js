"use strict";

const Service = require("egg").Service;

class VoteService extends Service {
  async getList() {
    const res = await this.app.mysql.select("list");
    return res;
  }
}

module.exports = VoteService;
