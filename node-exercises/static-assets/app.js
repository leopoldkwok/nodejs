var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); //absolute path to find images

var server = app.listen(8080);