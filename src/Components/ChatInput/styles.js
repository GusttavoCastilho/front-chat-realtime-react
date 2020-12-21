import styled from 'styled-components';

export const Container = styled.div`

    form {

        display: flex;

        input {
            width: 90%;
            height: 30px;
            margin-right: 10px;
            border: 1px solid #666;
            border-radius: 12px;
            outline: none;
            padding-left: 10px;

        }

        button {
            width: 200px;
            height: 35px;
            border-radius: 12px;
            border: 0;
            background-color: #ff9000;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            outline: none;
            cursor: pointer;

            transition: all 1s ease;
            :hover {
                opacity: 0.8;
            }
        }
    }
`;