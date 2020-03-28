import React from 'react'
import Tile from './tile'
import Styled from 'styled-components'

const Board = (props) => {
    function renderSquare() {
        let matrix = [];
        for (let i = 0; i < 9; i++) {
            matrix.push(
                <Tile
                    value={props.squares[i]}
                    onClick={() => props.handleClick(i)}
                />
            )
        }
        return matrix;
    }
    return (
        <GameBoard>
            {renderSquare()}
        </GameBoard>
    )
}
export default Board

const GameBoard = Styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
`