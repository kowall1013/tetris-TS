import styled from 'styled-components';
import { BOARD_WIDTH, BOARD_HEIGHT, CELL_WIDTH, cells} from '../setup'
import Cell from './Cell';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${BOARD_WIDTH}, ${CELL_WIDTH}px);
  grid-template-rows: repeat(${BOARD_HEIGHT}, ${CELL_WIDTH}px);
  background: #222;
  border: 1px solid #777;
`;

function Board() {
  return (
    <StyledBoard>
      {cells.map(cell => <Cell key={cell} />)}
    </StyledBoard>
  )
}

export default Board;