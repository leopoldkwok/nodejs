var express = require('express'); // requiring express
var app = express(); // creating an instance of express

app.get('/hello.txt', function(req, res){ // this is what serves the page
  res.send('Hello World');
});

var server = app.listen(8080, function() { // server runs here
    console.log('Listening on port 8080');
});