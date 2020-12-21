import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Container
} from './styles';

export default function Join() {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <Container>
            <h1>Chat - Mercado do Boi</h1>

            <form>
                <input type="text" placeholder="Seu Nome" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="text" placeholder="Sala" onChange={(e) => setRoom(e.target.value)} value={room} />
                <Link onClick={(e) => (!room || !name) ? e.preventDefault() : null} 
                    to={{
                        pathname: `/chat`,
                        state: {
                            name,
                            room
                        }
                    }}
                >
                <button type="submit">Entrar</button>
                </Link>
            </form>
        </Container>
    )
}