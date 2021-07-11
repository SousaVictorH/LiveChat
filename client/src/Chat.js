import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { v4 as uuid } from 'uuid';

const myId = uuid();

const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connection has been established'))

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // if message fild is valid submit it
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message: message
            });

            setMessage('');
        }
    };

    useEffect(() => {
        const handleNewMessage = newMessage => {
            setMessages([...messages, newMessage]);
        };

        socket.on('chat.message', handleNewMessage);

        return () => socket.off('chat.message', handleNewMessage);
    }, [messages]);

    return (
        <main className="container">
            <ul className="list">
                {
                    messages.map((item, index) => {
                        const flag = item.id === myId ? 'mine' : 'other';

                        return (
                            <li className={`list__item list__item--${flag}`} key={index}>
                                <span className={`message message--${flag}`}>
                                    {item.message}
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
            <form className="form" onSubmit={handleSubmit}>
                <input    
                    className="form__field"
                    placeholder="Type a new message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </main>
    );
};

export default Chat;