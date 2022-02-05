import styled from 'styled-components';

type PropsStyledDisplay = {
  gameOver?: boolean;
}

const StyledDisplay = styled.div<PropsStyledDisplay>`
  display: flex;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${({ gameOver }) => gameOver ? 'red' : '#999'};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

type Props = {
  gameOver?: boolean;
  text: string;
}

function Display({gameOver, text}: Props):JSX.Element {
  return (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
}

export default Display;