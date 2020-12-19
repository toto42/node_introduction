var net = require('net') // this contains all the tcp stuff

var chatServer = net.createServer(), clientList = []

chatServer.on('connection', function (client) {
    client.name = client.remoteAddress + ':' + client.remotePort
    client.write('Hi ' + client.name + '\n');
    clientList.push(client)
    client.on('data', function (data) {
        broadcast(data, client)
    })
    client.on('end', function () {
        console.log(client.name + ' quit')
        clientList.splice(clientList.indexOf(client), 1)
    })
    client.on('error', function(e) {
        console.log(e)
    })
})

function broadcast(message, client) {
    var cleanup = []
    for (var i = 0; i < clientList.length; i++) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(client.name + " says " + message)
            } else {
                cleanup.push(clientList[i])
                clientList[i].destroy()
            }
        }
    }
    for (i = 0; i < cleanup.length; i++) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1)
    }
}
chatServer.listen(9000)

// to test the client : telnet 127.0.0.1 9000