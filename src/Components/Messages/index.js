import React from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function Messages ({ messages, name }) {
    return (
        <Container>
       {
           messages.map((each, index) => (
               <div key={index}><Message name={each.user} displayName={each.displayName} currentUser={name} text={each.text} /></div>
           ))
       }
       </Container>
    )
}