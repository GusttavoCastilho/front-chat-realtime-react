import React from 'react';
import ReactEmoji from 'react-emoji';
import { Container } from './styles';

export default function Message({ name, currentUser, displayName, text }) {

    const yourMessage = (
     
        <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="msg-cont your-msg-cont">
                <p className="user-title you"><b><i>Você</i></b></p>
                <p className="text">{ReactEmoji.emojify(text)}</p>
            </div>
        </Container>
    );

    const userMessage = (
        <Container style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div className="msg-cont user-msg-cont">
                <p className="user-title"><b><i>{displayName}</i></b></p>
                <p className="text">{ReactEmoji.emojify(text)}</p>
            </div>
        </Container>
    );

    const adminMessage = (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="msg-cont admin-msg-cont">
                <p className="text admin-text">{text}</p>
            </div>
        </Container>
    );

    return (
        <div>
             {(name === currentUser) ? (yourMessage) : (name === 'Admin') ? (adminMessage) : (userMessage)}
        </div>
    )
}