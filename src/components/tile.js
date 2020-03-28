import React from 'react'
import Styled from 'styled-components'

function Tile({ value, onClick }) {
    return (
        <StyledTile onClick={onClick}>
            {value}
        </StyledTile>
    );
}

export default Tile

const StyledTile = Styled.button`
    color: #00897b;
    background: #363636;
    border: 4px solid #00897b;
    float: left;
    font-size: 96px;
    font-weight: bold;
    line-height: 136px;
    height: 136px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 136px;

        :focus {
            outline: none;
        }
`;