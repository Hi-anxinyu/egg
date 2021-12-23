"use strict";

/** @type Egg.EggPlugin */

exports.ejs = {
  enable: true, //开启ejs
  package: "egg-view-ejs", //指定开启包名
}
exports.mysql= {
  enable: true,
  package: "egg-mysql",
}
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
  
// };
