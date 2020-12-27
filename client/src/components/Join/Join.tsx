import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join: React.FC = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoom(e.target.value);
    };

    const handleLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!name || !room) {
            e.preventDefault();
        }
    };

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input className="joinInput" placeholder='Name' type='text' onChange={handleNameChange} /></div>
                <div><input className="joinInput" placeholder='Room' type='text' onChange={handleRoomChange} /></div>
                <Link onClick={handleLogin} to={{ pathname: '/chat', state: { name, room } }}>
                    <button className={'button mt-20'}>Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;