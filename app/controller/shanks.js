"use strict";

const Controller = require("egg").Controller;

class shanksController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("shanks.html", {
      id: 5,
      name: "加里奥",
      age: 50,
      skills: ["烤鱼", "麻辣香锅", "牛头,猪头,羊头"],
    });
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

  //post传参
  async post() {
    const { ctx } = this;
    console.log(ctx);
    ctx.body = {
      code: 200,
      msg: "请求成功",
      data: ctx.request.body,
    };
  }

  async getInfo() {
    const ctx = this.ctx;
    const res = await ctx.service.shanks.getInfo(ctx.query.id);
    ctx.body = res;
  }

  //设置cookie
  async add() {
    const ctx = this.ctx;
    try {
      ctx.cookies.set("user", "shanks");
      ctx.body = {
        code: 200,
        message: "设置成功",
      };
    } catch (error) {
      ctx.body = error;
    }
  }

  //设置cookie
  async del() {
    const ctx = this.ctx;
    try {
      ctx.cookies.set("user", null);
      ctx.body = {
        code: 200,
        message: "设置成功",
      };
    } catch (error) {
      ctx.body = error;
    }
  }

  //编辑cookie
  async editor() {
    const ctx = this.ctx;
    try {
      ctx.cookies.set("user", "localhost");
      ctx.body = {
        code: 200,
        message: "设置成功",
      };
    } catch (error) {
      ctx.body = error;
    }
  }

  //查看cookie
  async show() {
    const ctx = this.ctx;
    const user = ctx.cookies.get("user");
    console.log(user);
    ctx.body = {
      code: 200,
      message: "查看成功",
    };
  }
}

module.exports = shanksController;
