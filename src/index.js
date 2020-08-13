var http = require ("http");
var {info,error} = require ('./modules/my-log');
var {countries} = require("countries-list");
var url = require ("url");
var querystring = require ("querystring");
const { type } = require("os");

var server = http.createServer(function(request,response) {
    var parsed = url.parse(request.url)
    console.log("parsed: ", parsed);
    var pathname = parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log("Query:", query);


  
  if (pathname === '/'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<html><body><h1>Hola Mundo</h1></body></html>');
    response.end();
  }
  else if (pathname === '/home'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<html><body><h1>Estas en la /home</h1></body></html>');
    response.end();
  }
  else if (pathname === '/country'){
    response.writeHead(200, {'Content-Type':'application/json'});
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  }
  else if (pathname === '/info'){
    var result = info(pathname)
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(result);
    response.end();
  }
  else if (pathname === '/error'){
    var result = error(pathname)
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(result);
    response.end();
  }
  
  else {
    response.writeHead(400, {'Content-Type':'text/html'});
    response.write('<html><body><h1>Página no encontrada</h1></body></html>');
    response.end();
  }
});
server.listen(4000);

