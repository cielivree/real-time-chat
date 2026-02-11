import React, { useState } from 'react'

const LongPulling = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    const sendMessage = async () => {

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
                {messages.map(message => 
                    <div className='message' key={message.id}>
                        {message.message} 
                    </div>
                )}
            </div>
         </div>
    </div>
  )
}

export default LongPulling