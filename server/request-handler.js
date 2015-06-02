var url = require('url');

exports.requestHandler = function(request, response) { 
  
  var sendResponse = function(status, body) {
    headers = defaultCorsHeaders;
    headers['Content-Type'] = "application/JSON";
    response.writeHead(statusCode, headers);
    response.end(body);
  };

  var pathname = url.parse(request.url).pathname;
  var method = request.method;
  var results = [];
  
  console.log("Serving request type " + method + " for url " + pathname);
  // The outgoing status.
  var statusCode = 200;
  var msg = JSON.stringify({'results': results});
  
  if (method === 'GET') {
    sendResponse(statusCode, msg);
  } else if (method === 'POST'){
    statusCode = 201;
    sendResponse(statusCode, msg);  
  } else {
    statusCode = 404;
  }
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
