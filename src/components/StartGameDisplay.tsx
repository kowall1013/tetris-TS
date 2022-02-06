import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const GameOver = styled.span`
  display: block;
  font-size: 1.2rem;
  background: #000000;
  color: #C60000;
  padding: 16px 32px;
  border: 2px solid #777;
  border-radius: 8px;
`;

const StartGame = styled.button`
  background: #000000;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
`;

function StartGameDisplay() {
  return (
    <Header>
      <GameOver>Game Over!</GameOver>
      <StartGame>Start Game</StartGame>
    </Header>
  )
}

export default StartGameDisplay;
