var http = require('http');
var server = http.createServer();
    var handleReq = function(req,res) {
        res.writeHead(200, {});
        res.end('hello world');
    };
server.on('request', handleReq);
server.listen(8125);

var opts = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

var req = http.request(opts, function(res) {
    console.log(res);
    res.on('data', function(data) {
        console.log(data);
    });
});

req.end();