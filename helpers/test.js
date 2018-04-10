var constants = require('../config/constants');

var indexCss = function() {
  var rpta = [];
  if(constants.data.ambiente == 'desarrollo'){
    rpta = [
      'bower_components/bootstrap/dist/css/bootstrap.min',
      'bower_components/font-awesome/css/font-awesome.min',
    ];
  }
  if(constants.data.ambiente == 'produccion'){
    rpta = [
      'dist/test.min'
    ];
  }
  return rpta;
}

var indexJs = function() {
  if(constants.data.ambiente == 'desarrollo'){
    rpta = [
      'bower_components/jquery/dist/jquery.min',
      'bower_components/bootstrap/dist/js/bootstrap.min',
    ];
  }
  if(constants.data.ambiente == 'produccion'){
    rpta = [
      'dist/test.min'
    ];
  }
  return rpta;
}

exports.indexCss = indexCss;
exports.indexJs = indexJs;
