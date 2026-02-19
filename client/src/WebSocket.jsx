import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Websocket = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')

    useEffect(() => {
        socket.current = new WebSocket("ws://localhost:5000")
        
        socket.current.onopen = () => {
            setConnected(true)
        }

        socket.current.onmessage = () => {
            
        }

        socket.current.onclose = () => {
            console.log('Socket has closed.')
        }

        socket.current.onerror = () => {
            console.log('Socket error!')
        }
    }, [])

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
    }

    if (!connected) {
        return (
            <div className="center">
                <div className="form">
                    <input
                        type="text"
                        placeholder="Your name"
                        value={value}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button>Log In</button>
                </div>
            </div>
        )
    }

  return (
    <div className="center">
        <div>
            <div className='form'>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div className="messages">
                {messages.map(mes => 
                    <div className='message' key={mes.id}>
                        {mes.message} 
                    </div>
                )}
            </div>
         </div>
    </div>
  )
}

export default Websocket