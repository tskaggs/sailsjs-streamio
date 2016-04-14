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

		var params = req.params.all();
		var user = client.feed('user', 'eric', '');
		var activity = {actor: 'eric', tweet: params.text, verb: 'tweet', object: 1};

		user.addActivity(activity)
    		.then(function(data) { 
    			console.log('success', data);
    			res.json(data);
    		})
    		.catch(function(reason) { 
    			console.log('failure', reason);
    			res.json(data);
    		});

	},

	userget: function(req, res) {
		var user = client.feed('user', 'eric', '');

		user.get({ limit:5})
		  .then(function(data) { 
    			console.log('success', data);
    			res.json(data);
    		})
		  .catch(function(reason) { 
    			console.log('failure', reason);
    			res.json(data);
    		});
	}
};

