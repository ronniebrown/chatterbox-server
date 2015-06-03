/* Import node's http module: */
var http = require("http");
var handleRequest = require("./request-handler");
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(handleRequest.requestHandler);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

// var http = require("http");
// var handleRequest = require("./request-handler");
// var url = require('url');
// var port = 3000;
// var ip = "127.0.0.1";

// var routes = {
//   '/classes/chatterbox' : handleRequest,
//   '/classes/messages' : handleRequest,
//   '/classes/room' : handleRequest,
//   '/classes/room1' : handleRequest
// }

// var server = http.createServer(function(request, response) {
//   // console.log("Serving request type " + request.method + " for url " + request.url);

//   var parts = urlParser.parse(request.url);

//   var route = routes[parts.pathname];
//   if ( route ) {
//     route(request, response);
//   } else {
//     utilities.sendResponse(response, "Not Found", 404);
//   }

// });
// console.log("Listening on http://" + ip + ":" + port);
// server.listen(port, ip);
