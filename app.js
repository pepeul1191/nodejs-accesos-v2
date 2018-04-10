'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const server = new Hapi.Server();
const HRL = require('hapi-routes-loader');
const Vision = require('vision');
const Ejs = require('ejs');
const constants = require('./config/constants');

server.connection({
  host: 'localhost',
  port: 5000,
  routes: {
    cors: true,
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
});

server.ext('onPreResponse', function(request, reply){
  if (request.response.header) {
    request.response.header('Server', 'Ubuntu;hapi.js');
    request.response.header('x-powered-by', 'hapi.js;Node.js');
  }
  reply.continue();
});

server.on('response', function (request) {
  if (constants.data['ambiente'] == 'desarrollo'){
    console.log(
    	request.info.remoteAddress + ': ' +
    	request.method.toUpperCase() + ' ' +
    	request.url.path + ' --> ' +
    	request.response.statusCode
    );
  }
});

server.register(
  [
    Inert,
    Vision,
    {
      register: HRL,
      options: {
      	dirname: __dirname, //must be a string with a root path
      	pathRoutes: '/routes'
    	}
    },
  ],
  (err) => {
	 	if (typeof err !== 'undefined') {
	 		console.log(err);
		}else{
			server.views({
		    engines: {
		      html: Ejs,
		    },
		    path: __dirname + '/views',
		    layout: false
		  });
			server.start((err) => {
			  console.log('Running HapiJs web app');
			});
		}
	}
);

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true,
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  config: {
    auth: false,
  },
  handler: function (request, reply) {
    reply('Error: URL vacía').code(400);
  }
});
