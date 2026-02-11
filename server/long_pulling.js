const express = require('express')
const cors = require('cors')
const EventEmitter = require('node:events')

const PORT = 5000
const emitter = new EventEmitter()
const app = express()
app.use(cors())

app.get('/get-messages', (request, response) => {
    emitter.once('newMessage', (message) => {
        response.json(message)
    })
})

app.post('/new-messages', ((request, response) => {
    const message = request.body
    emitter.emit('newMessage', message)
    response.status(200)
}))

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))

