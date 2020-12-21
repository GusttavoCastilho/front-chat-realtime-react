import styled from 'styled-components';

export const Container = styled.div`
    .chat-cont {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 30px 20px;
}
.chat-window {
    background-color: white;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px 40px;
    border-radius: 15px;
    height: 75vh;
}

/* responsive CSS */
@media only screen and (max-width: 768px) {
    .chat-window {
        padding: 20px;
        height: 70vh;
    }
    .online-users {
        display: none;
    }
}  
`;