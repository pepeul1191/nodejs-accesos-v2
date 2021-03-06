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
        //console.log(err);
        rpta = JSON.stringify({
          tipo_mensaje: 'error',
           mensaje: [
             'Se ha producido un error en listar los sistemas',
             err
           ]
        });
        reply(rpta).code(500);
      });
    }
  },
  {
    method: 'POST',
    path: 'guardar',
    config: {
      auth: false,
      pre: [
        {
          method: middleware.demo
        },
      ],
    },
    handler: function (request, reply) {
      var data = JSON.parse(request.payload.data);
      var nuevos = data['nuevos'];
      var editados = data['editados'];
      var eliminados = data['eliminados'];
      var array_nuevos = [];
      models.DB.transaction(function (t) {
        eliminados.forEach(function(eliminado) {
          models.Sistema.destroy({
            where: {
              id: eliminado
            }
          }, {
            transaction: t
          });
        });
        editados.forEach(function(editado) {
          models.Sistema.update({
            nombre: editado['nombre'],
            version: editado['version'],
            repositorio: editado['repositorio']
          }, {
            where: {
              id: editado['id']
            }
          }, {
            transaction: t
          });
        });
        var promises = [];
        nuevos.forEach(function(nuevo) {
          var newPromise = models.Sistema.create({
            nombre: nuevo['nombre'],
            version: nuevo['version'],
            repositorio: nuevo['repositorio'],
          }, {
            transaction: t
          });
          promises.push(newPromise);
        });
        return Promise.all(promises).then(function(nuevosPromises) {
            var returnPromises = [];
            var i = 0;
            nuevosPromises.forEach(function(promise){
              var temp = {
                'temporal': nuevos[i]['id'] ,
                'nuevo_id': promise['id']
              };
              returnPromises.push(temp);
            });
            return Promise.all(returnPromises);
        });
      }).then(function (result) {
        var rpta = JSON.stringify({
          tipo_mensaje:  'success',
          mensaje: [
            'Se ha registrado los cambios en los sistemas',
            result
          ]
        });
        reply(rpta);
      }).catch(function (err) {
        console.log("NO!!!");
        ///return next(err);
        console.log(err);
        rpta = JSON.stringify({
          tipo_mensaje: 'error',
           mensaje: [
             'Se ha producido un error en guardar los sistemas',
             err
           ]
        });
        reply(rpta).code(500);
      });
    }
  },
];
