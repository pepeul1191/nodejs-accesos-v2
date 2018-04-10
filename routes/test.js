'use strict';
var middleware = require('../config/middleware');
var constants = require('../config/constants');
var helpers = require('../config/helpers');
var testHelper = require('../helpers/test');

module.exports = [
  {
    method: 'GET',
    path: 'conexion',
    config: {
      auth: false,
      pre: [
        { method: middleware.demo},
      ],
    },
    handler: function (request, reply) {
      reply('ok');
    }
  },
  {
    method: 'GET',
    path: 'view',
    config: {
      auth: false,
      pre: [
        { method: middleware.demo},
      ],
    },
    handler: function (request, reply) {
      var locals = {
        constants: constants.data,
        title: 'Test EJS Title',
        helpers: helpers,
        csss: testHelper.indexCss(),
        jss: testHelper.indexJs(),
      };
      reply.view('test/index', locals);
    }
  },
];
