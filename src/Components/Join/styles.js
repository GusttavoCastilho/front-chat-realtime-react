import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    h1 {
        color: #fff;

    }

    form {
        display: flex;
        flex-direction: column;

        input {
            width: 300px;
            height: 50px;
            margin-top: 20px;
            border-radius: 12px;
            border: 0;
            outline: none;
            padding-left: 16px;

            &::placeholder {
                font-size: 16px;
                
            }
        }

        button {
            margin-top: 20px;
            min-width: 315px;
            height: 50px;
            border-radius: 12px;
            border: 0;
            outline: none;
            color: #fff;
            background-color: #ff9000;
            font-size: 18px;
            font-weight: bold;

            transition: all 1s ease;

            :hover{
                opacity: 0.8;
                cursor: pointer;
            }
        }
    }
`; 