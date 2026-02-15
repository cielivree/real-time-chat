const express = require('express')
const cors = require('cors')
const EventEmitter = require('node:events')

const PORT = 5000
const emitter = new EventEmitter()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/connect', (request, response) => {
    response.writeHead(200, {
        'Connection': 'keep-live',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
   })

    emitter.on('newMessage', (message) => {
       response.write(`${message}`)
   })
})

app.post('/new-messages', ((request, response) => {
    const message = request.body
    emitter.emit('newMessage', message)
    response.status(200)
}))

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))

