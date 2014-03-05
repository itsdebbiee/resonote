var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	res.render('add', data);
	req.query.name;
	req.query.description;
 }
