'use strict';
var middleware = require('../config/middleware');
var constants = require('../config/constants');
var helpers = require('../config/helpers');

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
      var csss = [
        'bower_components/bootstrap/dist/css/bootstrap.min',
        'bower_components/font-awesome/css/font-awesome.min'
      ];
      var jss = [
        'bower_components/jquery/dist/jquery.min',
        'bower_components/bootstrap/dist/js/bootstrap.min'
      ];
      var locals = {
        constants: constants.data,
        title: 'Test EJS Title',
        helpers: helpers,
        csss: csss,
        jss: jss,
      };
      reply.view('test/index', locals);
    }
  },
];
