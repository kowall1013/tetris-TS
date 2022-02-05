import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'; 
import Display from './components/Display';
import StartButton from './components/StartButton';
import Stage from './components/Stage';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { useInterval } from './hooks/useInterval';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

const TetrisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
`;

const TetrisDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

function App() {
  const [gameOver, setGameOver] = useState(true);
  const [dropTime, setDropTime] = useState<null | number>(null)

  const gameArea = useRef<HTMLDivElement>(null);

  const { player } = usePlayer();
  const { stage } = useStage(player);

  const handleStartGame = (): void => {
    if(gameArea.current) gameArea.current.focus();
  }

  useInterval(() => {
    drop();
  }, dropTime)
  return (
    <Wrapper role="button" tabIndex={0} ref={gameArea}>
      <TetrisWrapper>
        <TetrisDisplay>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='GameOver!'/>
              <StartButton callback={handleStartGame}/>
            </>
          ): (
            <>
              <Display text="Score:" />
              <Display text="Rows:" />
              <Display text="Level:" />
            </>
          )}
        </TetrisDisplay>
        <Stage stage={stage} />
      </TetrisWrapper>
    </Wrapper>
  );
}

export default App;
