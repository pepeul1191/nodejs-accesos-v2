const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	//host: 'localhost',
	dialect: 'sqlite',
	pool: {
		 max: 5,
		 min: 0,
		 idle: 10000
	},
	storage: 'db/accesos.db',
	define: {
		timestamps: false // true by default
	}
});

exports.db = sequelize;
