'use strict';

const { app } = require('egg-mock/bootstrap');

describe('text/app/controller/shanks.text.js', () => {
  it('should GET /shanks', () => {
    return app
      .httpRequest()
      .get('/shanks')
      .expect('<h1>This is Shanks</h1>')
      .expect(200);
  });
  it('should GET /eat', async () => {
    return app
      .httpRequest()
      .get('/eat')
      .expect('<h1>异步单元测试</h1>')
      .expect(200);
  });
});
