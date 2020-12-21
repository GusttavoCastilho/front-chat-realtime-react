import React from 'react';

import { Container } from './styles';

export default function UsersList({ users }) {
    return (
        <Container>
                    <h1>Usuários Online</h1>
                    <hr />
                    
                        { 
                            users.map((user, index) => {
                                return (
                                    <div key={index} className="user">{user.displayName}</div>
                                )
                            })
                        }
                    <a href="/"><button>Trocar de Sala</button></a>
        </Container>
    )
}
