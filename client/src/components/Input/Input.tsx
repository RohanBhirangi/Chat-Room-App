import React, { ChangeEvent, FormEvent } from 'react';
import './Input.css';

interface InputProps {
    message: string,
    setMessage: (message: string) => void,
    sendMessage: () => void
}

const Input: React.FC<InputProps> = ({ message, setMessage, sendMessage }) => {

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleKeyboardSend = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };
    
    const handleMouseSend = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <form className="form">
            <input className="input" type='text' placeholder='Type a message...' value={message} onChange={handleMessageChange} onKeyPress={handleKeyboardSend} />
            <button className="sendButton" onClick={handleMouseSend}>Send</button>
        </form>
    );
};

export default Input;