import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

interface MessagesProps {
    messages: Array<Message>,
    name: string
};

const Messages: React.FC<MessagesProps> = ({ messages, name }) => {

    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => {
                return <div key={i}><Message message={message} name={name} /></div>
            })}
        </ScrollToBottom>
    );
};

export default Messages;