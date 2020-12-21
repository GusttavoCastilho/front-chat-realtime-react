import React from 'react';

import { Container } from './styles';

export default function ChatInput ({ message, setMessage, sendMessage }) {
    return (
        <Container>
            <form>
                <input 
                placeholder="Digite a mensagem"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => (event.key === "Enter") ? sendMessage(event) : null}
                />
                <button onClick={(e) => sendMessage(e)}>Enviar</button>
            </form>
        </Container>
    )
}