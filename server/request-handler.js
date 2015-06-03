exports.requestHandler = function() {

app.get('/', function(req, res) {
  res.send(200, 'Hola')
});

app.post('/', function(req, res) {
  res.send(201, 'Post request');
});

};














// var url = require('url');
// var objectId = 1;
// var results = [];


// exports.requestHandler = function(request, response) { 
  
//   var sendResponse = function(code, body, type) {
//     headers = defaultCorsHeaders;
//     // set default type if undefined
//     headers['Content-Type'] = type || 'text/plain';
//     response.writeHead(code, headers);
//     response.end(body);
//   };
  
//   // set default status code
//   var statusCode = 404;
//   // set default body message
//   var msg = JSON.stringify( {'results': results} );
  
//     // handle HTTP requests
//     var pathname = url.parse(request.url).pathname;
//     var method = request.method;

//     // 1st path for client, 2nd path for tests
//     if (pathname === '/classes/chatterbox' || pathname === '/classes/messages') {
      
//       // server logs
//       console.log("Serving request type " + method + " for url " + pathname);

//       if (method === 'GET') {

//         statusCode = 200;
//         sendResponse(statusCode, msg);

//       }     
   
//       else if (method === 'POST') {
      
//         var chunks = '';
//         request.on('data', function(chunk) {
//           chunks += chunk;
//         });
//         request.on('end', function(){
//           statusCode = 201;
//           var message = JSON.parse(chunks);
//           // client uses objectId to add a message
//           message.objectId = ++objectId;
//           results.push(message);
//           sendResponse(statusCode, JSON.stringify({'results': results}), 'application/JSON');
//         });

//       }
      
//       else if (method === 'OPTIONS') {
//         statusCode = 200;
//         sendResponse(statusCode, null);
//       }

//     }
//     else {
//       msg = 'Non-existent file';
//       sendResponse(statusCode, msg);
//     }

// };

// var defaultCorsHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10 // Seconds.
// };

