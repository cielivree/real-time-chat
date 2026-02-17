const ws = require('ws')

const wsServer = new ws.Server({
    port: 5000
}, () => {
   console.log('Server started by websocket') 
})

wsServer.on('connection', function connection(ws) {
    ws.send('User1 has successfully connected')
    
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                break;
            case 'connection':
                broadcastMessage(message)
                break;
        }
    })
})

const message = {
    event: 'message' || 'connection',
    id: 123,
    date: '17.02.2026',
    username: 'Kitty',
    message: 'Hello, everyone!'
}

function broadcastMessage(message) {
    wsServer.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}