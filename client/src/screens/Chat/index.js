import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import socket from '../../services/socketIo';

import {
    Container,
    Form,
    List,
    ListItem,
    Message
} from './styles';

import Input from '../../components/Input';

const myId = uuid();

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // if message fild is valid submit it
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message: message.trim()
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

    return(
        <Container>
            <List>
                {
                    messages.map((item, index) => {
                        const flag = item.id === myId ? 'mine' : 'other';

                        return (
                            <ListItem className={`${flag}`} key={index}>
                                <Message className={`${flag}`}>
                                    {item.message}
                                </Message>
                            </ListItem>
                        );
                    })
                }
            </List>
            <Form onSubmit={handleSubmit}>
                <Input 
                    placeholder="Type a new message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Form>
        </Container>
    );
};

export default Chat;