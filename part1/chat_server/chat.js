var net = require('net') // this contains all the tcp stuff

var chatServer = net.createServer()

chatServer.on('connection', function(client) {
    client.write('Hi!\n');
    client.on('data', function(data) {
        console.log(data)
    })
})
chatServer.listen(9000)

// to test the client : telnet 127.0.0.1 9000