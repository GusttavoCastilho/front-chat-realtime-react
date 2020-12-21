import styled from 'styled-components';

export const Container = styled.div`
    display: 'flex';
    justify-content: 'flex-end';


    .msg-cont {
    color: black;
    padding: 5px 15px;
    max-width: 60%;
    min-width: 20%;
    border-radius: 15px;
    margin: 5px 0px;
}
.user-msg-cont {
    background-color: #d2d0d0ad;
}
.your-msg-cont {
    background-color: #ff9000;
    color: white;
}
.admin-msg-cont {
    background-color: #fff295;
    border: 1px dashed #6b5f0aed;
    text-align: center;
    max-width: 80%;
    min-width: 50%;
    justify-content: center;
}
.text {
    word-break: break-word;
    font-size: 16px;
    margin-bottom: 5px;
}
.admin-text {
    margin: 0px;
    font-size: 18px;
}
.user-title {
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px 0px;
    font-size: 14px;
    color: #00000094;
}
.you {
    color: #ffffffbf;
}

/* responsive CSS */
@media only screen and (max-width: 768px) {
    .admin-msg-cont {
        width: 80%;
    }
    .msg-cont {
        max-width: 80%;
    }
}
`;