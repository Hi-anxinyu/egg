"use strict";

const Service = require("egg").Service;

class ShanksService extends Service {
  async getInfo(id) {
    const res = await this.app.mysql.select("list");
    return res;
  }
}

module.exports = ShanksService;
