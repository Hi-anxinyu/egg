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
});
