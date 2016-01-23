
// Load the module dependencies
var users = require('../../server/controllers/users.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'signup' routes
	app.route('/users')
	   .get(users.list)
	   .post(users.create);
};