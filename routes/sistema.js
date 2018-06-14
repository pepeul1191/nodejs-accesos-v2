'use strict';
var middleware = require('../config/middleware');
var constants = require('../config/constants');
var helpers = require('../config/helpers');
var models = require('../config/models');
var testHelper = require('../helpers/test');

module.exports = [
  {
    method: 'GET',
    path: 'listar',
    config: {
      auth: false,
      pre: [
        {
          method: middleware.demo
        },
      ],
    },
    handler: function (request, reply) {
      models.Sistema.findAll({
        attributes: [
          'id',
          'nombre',
          'version',
          'repositorio'
      ]}).then(function (sistemas) {
        var rpta = JSON.stringify(sistemas);
        reply(rpta);
      }).catch(function (err) {
        console.log(err);
        rpta = JSON.stringify({
          tipo_mensaje : 'error',
           mensaje : [
             'Se ha producido un error en guardar los sistemas',
             err
           ]
        });
        reply(rpta).code(500);
      });
    }
  },
];
