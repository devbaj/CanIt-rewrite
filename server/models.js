const Sequelize = require('sequelize');

const sequelize = new Sequelize('can_it', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

// Connection test
sequelize
	.authenticate()
	.then( () => console.log('database connection successfully established'))
	.catch( err => console.log('Unable to connect to database', err));

const User = sequelize.define('User', {
	firstName: {
		type: Sequelize.STRING,
		field: 'first_name',
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
			len: [2,30]
		}
	},
	lastName: {
		type: Sequelize.STRING,
		field: 'last_name',
		allowNull: false,
		validate: {
			notNull: true,
			notEmpty: true,
			len: [2,30]
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			isEmail: true
		}
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: true,
			isAlpha: true,
		}
	},
	hashedPW: {
		type: Sequelize.STRING,
		field: 'hashed_pw',
		allowNull: false,
		validate: {
			notNull: true
		}
	}
}, {
	timestamps: true,
	paranoid: true,
	updatedAt: 'updated_at',
	createdAt: 'created_at',
	deletedAt: 'deleted_at'
})

module.exports = {
	User: User
}
