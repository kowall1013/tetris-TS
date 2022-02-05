import styled from 'styled-components';
import { TETROMINOS } from '../setup';

type CellPropsStyled = {
  type: keyof typeof TETROMINOS;
  color: string;
};

const StyledCell = styled.div<CellPropsStyled>`
  width: auto;
  background: rgba(${({ color }) => color}, 0.8);
  border: ${({ type }) => type === 0 ? '0px solid' : '4px solid'};
  border-bottom-color: rgba(${({ color }) => color}, 0.1);
  border-right-color: rgba(${({ color }) => color}, 1);
  border-top-color: rgba(${({ color }) => color}, 1);
  border-left-color: rgba(${({ color }) => color}, 0.3);
`;

type CellProps = {
  type: keyof typeof TETROMINOS;
}

function Cell({ type }: CellProps):JSX.Element {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  )
}

export default Cell;