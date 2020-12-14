const { Console } = require('console');
var http = require('http'); // http lib imported

http.createServer(function (req, res) { // call method createServer
    res.writeHead(200, {'Content-Type': 'text/plain'}); // send code 200 (OK)
    res.end('Hello World\n'); // print Hello
}).listen(8124, "127.0.0.1"); // port is 8124
console.log('Server running at http://127.0.0.1:8124/');