const express = require('express')
const cors = require('cors')
const events = require('events')

const PORT = 5000

const emitter = events.EventEmitter()

const app = express()
app.use(cors())

app.get('get-messages', (request, response) => { })

app.post('new-messages', (request, response) => {
    const message = request.body
    response.status(200)
})

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))

