import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './Chat.css';

const ENDPOINT = 'https://chat-room-app0.herokuapp.com/';

let socket: Socket;

const Chat: React.FC = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(new Array<Message>());

    const location = useLocation();

    useEffect(() => {
        const state: any = location.state;

        socket = io(ENDPOINT);

        setName(state.name);
        setRoom(state.room);

        socket.emit('join', { name: state.name, room: state.room }, (error: string) => {
            if(error) {
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [location.state]);

    useEffect(() => {
        socket.on('message', (message: Message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = () => {
        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    };

    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;