import { useState, useRef } from 'react';
import styled from 'styled-components'; 
import StartGameDisplay from './components/StartGameDisplay';
import Board from './components/Board';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const Tetris = styled.div`
`;

function App() {

  return (
    <Wrapper>
      <Tetris>
        <StartGameDisplay />
        <Board />
      </Tetris>  
    </Wrapper>
  );
}

export default App;
