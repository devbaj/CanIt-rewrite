const Models = require('./models');
const User = Models.User;

module.exports = {
	index: (req, res) => res.json({message: 'controller is working'})
}