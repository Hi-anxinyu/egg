'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/shanks', controller.shanks.index);
  router.get('/eat', controller.shanks.eat);
  router.get('/play', controller.shanks.play);
  router.get('/play2/:name/:place/:friend', controller.shanks.play2);
  router.post('/post',controller.shanks.post);
  router.get('/getinfo',controller.shanks.getInfo);
};
