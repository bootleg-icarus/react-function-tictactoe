import React from 'react'
import Styled from 'styled-components';


function Restart({ onClick }) {

    return (
        <Container>
            <RestartButton onClick={onClick}>
                Restart
            </RestartButton>
        </Container>
    );
}

export default Restart


const Container = Styled.div`
    margin-top: 20px;
    text-align: center;
`
const RestartButton = Styled.button`
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #424242;
    color: #808080;
    border: none;
    font-size: 24px;
    line-height: 48px;
    height: 48px;
    width: 40%;
    text-align: center;
    border-radius: 4px;
    :hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    :active{
        box-shadow: 0 1px rgba(0,0,0,0.24);
        transform: translateY(1px);
    }
    :focus{
        outline: none;
    }
`;