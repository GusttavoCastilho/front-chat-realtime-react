import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;

    h1 {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 32px;
    }

    hr {
        width: 100%;
        background-color: #666;
        margin-bottom: 10px;
    }

    .user {
        padding-top: 5px;
        font-size: 20px;
    }

    button {
    font-size: 20px;
    font-weight: bold;
    height: auto;
    padding: 10px 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: #ff9000;
    color: #fff;
    border: 0;
    border-radius: 12px;
    outline: none;
    cursor: pointer;
    transition: all 1s ease;

    :hover {
        opacity: 0.8;
    }
    }
`;