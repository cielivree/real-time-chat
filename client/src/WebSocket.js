import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const WebSocket = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')
        
        socket.current.onopen = () => {

        }

        socket.current.onmessage = () => {
            
        }

        socket.current.onclose = () => {

        }

        socket.current.onerror = () => {
            
        }
    }, [])

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
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

export default LongPulling