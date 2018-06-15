const Sequelize = require('sequelize');
const database = require('./database');

var db = database.db;

const Sistema = db.define('sistemas', {
	id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
	nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
	version: {
    type: Sequelize.STRING
  },
	repositorio: {
    type: Sequelize.STRING
  },
});

exports.DB = db;
exports.Sistema = Sistema;
