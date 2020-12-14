var net = require('net') // this contains all the tcp stuff

var chatServer = net.createServer(), clientList = []

chatServer.on('connection', function(client) {
    client.write('Hi!\n');
    clientList.push(client)
    client.on('data', function(data) {
        for (var i = 0; i < clientList.length; i++) {
            clientList[i].write(data)
        }
        console.log(data)
    })
})
chatServer.listen(9000)

// to test the client : telnet 127.0.0.1 9000