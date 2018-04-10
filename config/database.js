var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost:27017/test');

exports.db = db;
exports.Schema = Schema;
exports.mongoose = mongoose;
