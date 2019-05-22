const Sequelize = require('sequelize');

const sequelize = new Sequelize('can_it', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

// Connection test
// sequelize
// 	.authenticate()
// 	.then( () => console.log('database connection successfully established'))
// 	.catch( err => console.log('Unable to connect to database', err));