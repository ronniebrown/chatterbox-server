var url = require('url');
var fs = require('fs');
var results = [];
var storage = {};

exports.requestHandler = function(request, response) { 
  
  var sendResponse = function(status, body) {
    headers = defaultCorsHeaders;
    headers['Content-Type'] = "application/JSON";
    response.writeHead(statusCode, headers);
    response.end(body);
  };

  var pathname = url.parse(request.url).pathname;
  var method = request.method;
  
  console.log("Serving request type " + method + " for url " + pathname);
  // The outgoing status.
  var statusCode = 200;
  var msg = JSON.stringify({'results': results});
  
  if (method === 'POST') {
    if (!pathname in storage) {

      statusCode = 404;
      msg = 'nonexistent file';
      sendResponse(statusCode, msg);

    } else {

      var chunks = '';
      request.on('data', function(chunk) {
        chunks += chunk;
      });
      request.on('end', function(){
        statusCode = 201;
        results.push( JSON.parse(chunks) );
        // storage[room] = results['roomname'];
        sendResponse(statusCode, JSON.stringify({'results': results}));
      });

    }

  } else if (method === 'GET') {
    if (!pathname in storage) {
    console.log('pathname: ', pathname);
      statusCode = 404;
      msg = 'nonexistent file';
      sendResponse(statusCode, msg);

    } else {

      sendResponse(statusCode, msg);

    }
  }
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
