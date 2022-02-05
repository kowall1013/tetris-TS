import styled from "styled-components";

const StyledStartButton = styled.button`
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

type Props = {
  callback: () => void;
}

function StartButton({ callback }:Props):JSX.Element {
  return (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  )
}

export default StartButton;