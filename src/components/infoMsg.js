import React from 'react'
import { isBoardFull } from './util'
import Styled from 'styled-components';

const InfoMsg = (props) => {
    function getStatus() {
        if (props.winner) {
            return "Winner: " + props.winner;
        } else if (isBoardFull(props.squares)) {
            return "Draw!";
        } else {
            return "Next player: " + props.nextSymbol;
        }
    }
    return (
        <GameInfo>{getStatus()}</GameInfo>
    )
}

export default InfoMsg


const GameInfo = Styled.div`
    font-size: 48px;
    color: #808080;
    margin-top: 20px;
    text-align: center;
`;