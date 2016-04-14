/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var stream = require('getstream');
var client = stream.connect('', '', '');

module.exports = {

	useraction: function(req, res) {
		var user = client.feed('user', '', '');
		var activity = {actor: 'eric', tweet: 'This is a tweet!', verb: 'tweet', object: 1};

		user.addActivity(activity)
    		.then(function(data) { 
    			console.log('success', data);
    			res.json(data);
    		})
    		.catch(function(reason) { 
    			console.log('failure', reason);
    			res.json(reason);
    		});

	},
};

