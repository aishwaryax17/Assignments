var http = require('http');
let uc = require('upper-case');
http.createServer(function (req, res) {
  try {
    res.writeHead(200, {'Content-Type': 'text/html'});
   
    res.write(uc.upperCase("Hello World!"));
    res.end();
  } catch (error) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
    console.error(error);
  }
}).listen(8000);