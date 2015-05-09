//basic node app
// fs means file system

var http = require('http'); // node has a library http please give it to me

// this creates a web server and takes an argument

http.createServer(function (req, res) { //res means response
  res.writeHead(200, {'Content-Type': 'text/plain'}); //200 status code is successful, 404 means can't find page and sending text
  res.end('Hello Minnesota\n'); // I am going to end my request and this is what I will send.
})
.listen(8080, '127.0.0.1'); //chaining on port 8080 recommended to be over 100

console.log('Server running at http://127.0.0.1:8080/'); //prints on the terminal or console