var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

// these tweets will always be here as they are from memory
var tweets = [
  {text: "Hai dude.", time: new Date().getTime() - 12300},
  {text: "This is cool.", time: new Date().getTime() - 1000},
  {text: "What's up?", time: new Date().getTime()},
]; // these list of tweets will get bigger and bigger

app.use(express.static(__dirname + '/public')); 

app.get('/ajax', function(request, response) {
  response.type('json');
  response.end(JSON.stringify({tweets:tweets})); // sending back list of tweets
});

app.post('/ajax', function(request, response) {
  var newTweet = {text: request.body.tweet, time: new Date().getTime()};
  tweets.push(newTweet);
  response.type('json');
  response.end(JSON.stringify(newTweet));
});

var server = app.listen(8080);