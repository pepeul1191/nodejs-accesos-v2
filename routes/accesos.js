'use strict';
var middleware = require('../config/middleware');
var constants = require('../config/constants');
var helpers = require('../config/helpers');
var accesosHelper = require('../helpers/accesos');

module.exports = [
  {
    method: 'GET',
    path: '',
    config: {
      auth: false,
      pre: [
        {
          method: middleware.demo
        },
      ],
    },
    handler: function (request, reply) {
      var locals = {
        constants: constants.data,
        title: 'Accesos',
        helpers: helpers,
        csss: accesosHelper.indexCss(),
        jss: accesosHelper.indexJs(),
        data: JSON.stringify({
          modulo : 'Accesos',
        }),
        'menu': JSON.stringify(
          [
            {
              url : 'accesos/',
              nombre : 'Accesos'
            },
          ]
        ),
        items: JSON.stringify(
          [
            {
              subtitulo: 'Opciones',
              items:
      		      [
      		        {
                    item: 'Gestión de Sistemas',
                    url: 'accesos/#/sistema'
                  },
                  {
                    item: 'Gestión de Usuarios',
                    url: 'accesos/#/usuario'
                  },
      		      ]
      	    },
          ]
        ),
      };
      reply.view('accesos/index', locals);
    }
  },
];
