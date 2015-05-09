var express = require('express');
var app = express();

app.get('/cheer.txt', function(request, response) { // defining a new route
	response.end('You have quite lovely eyes'); //send back this response if they use this route
});

app.get('/jeer.txt', function(request, response) { //defining another new route
	response.end('Your mother was indeed a hampster.');
});

var server = app.listen(8080, function() { //creates the server
	console.log('Listening on port 8080');
});
