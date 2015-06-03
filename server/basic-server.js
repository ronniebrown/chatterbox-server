var express = require('express');
var app = express();
var statusCode;
var results = [];
//var msg = JSON.stringify( {'results': results} );

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type" : "application/json"
};

app.get(/classes/, function(req, res) {
  res.status(200).json( {'results': results} );
});

app.post(/classes/, function(req, res) {
  res.status(201).json( {'results': results} );
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http:localhost', host, port);
});












// /* Import node's http module: */
// var http = require("http");
// var handleRequest = require("./request-handler");
// var port = 3000;
// var ip = "127.0.0.1";

// var server = http.createServer(handleRequest.requestHandler);
// console.log("Listening on http://" + ip + ":" + port);
// server.listen(port, ip);

