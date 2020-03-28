import React, { useState } from 'react';
import Styled from 'styled-components';
import { calculateWinner } from './components/util'
import Board from './components/board'
import Restart from './components/restartButton'
import InfoMsg from './components/infoMsg'
import './App.css';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] != null || winner != null) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = nextSymbol;
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  return (

    <Container>
      <Field>
        <Board handleClick={handleClick} squares={squares} />
      </Field>
      <Field>
        <InfoMsg winner={winner} squares={squares} nextSymbol={nextSymbol} />
        <Restart
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
          }}
        />
      </Field>
    </Container>

  );
}

export default App;

const Container = Styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr
`;

const Field = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
