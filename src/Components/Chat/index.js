import React, { useState, useEffect } from 'react';
import { message as antMessage } from 'antd';
import Messages from '../Messages';
import ChatInput from '../ChatInput';
import UsersList from '../UsersList';
import io from 'socket.io-client';

import { Container } from './styles';

let socket;


export default function Chat (props) {

    const [displayName] = useState(props.location.state.name);
    const [name] = useState(props.location.state.name.trim().toLowerCase());
    const [room] = useState(props.location.state.room.trim().toLowerCase());
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://chat-realtime-nodejs-react.herokuapp.com/';

    useEffect(() => {
        socket = io.connect(ENDPOINT);
        socket.emit('join', { name, room, displayName }, (data) => {
            console.log(data);
            if(data && data.error) {
                return antMessage.error(data?.error);
            }
        });

        // Desconectar User
        return () => {
           socket.emit("disconnect");
           socket.off();
        }
    }, [ENDPOINT, name, room ,displayName]);


    useEffect(() => {
        socket.on("message", (message) => {
            setMessages(messages => [...messages, message]);
        });
        socket.on("roomData", (data) => {
            if(room === data.room) {
                setUsers(data.users);
            }
        });
    }, [room]);

    function sendMessage(event) {
        event.preventDefault();
        if(message) {
            socket.emit("sendMessage", message, () => setMessage(''));
        }
    }

    return (
        <div>
             <Container>
                <div className="chat-cont">
                   
                        <div className="chat-window">
                            <Messages messages={messages} name={name} />
                            <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
                        </div>
                        <div className="online-users">
                            <UsersList users={users} />
                        </div>
                   
                </div>
            </Container>
        </div>
    )
}