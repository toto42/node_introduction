var net = require('net') // this contains all the tcp stuff

var chatServer = net.createServer(), clientList = []

chatServer.on('connection', function(client) {
    client.name = client.remoteAddress + ':' + client.remotePort
    client.write('Hi ' + client.name + '\n');
    clientList.push(client)
    client.on('data', function(data) {
        broadcast(data, client)
    })
})

function broadcast(message, client) {
    for (var i = 0; i < clientList.length; i++) {
        if (client !== clientList[i]) {
            clientList[i].write(client.name + " says " + message)
        }
    }
}
chatServer.listen(9000)

// to test the client : telnet 127.0.0.1 9000