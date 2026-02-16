const ws = require('ws')

const wsServer = new ws.Server({
    port: 5000
}, () => {
   console.log('Server started by websocket') 
})