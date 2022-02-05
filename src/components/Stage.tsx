import styled from "styled-components";
import { STAGE_WIDTH, STAGE_HEIGHT} from '../setup';
import { TETROMINOS } from "../setup";
import Cell from './Cell';

const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;

export type STAGECELL = [keyof typeof TETROMINOS, string]
export type STAGE = STAGECELL[][]

type PropsStage = {
  stage: STAGE;
}

function Stage({ stage }: PropsStage):JSX.Element {
  return (
    <StyledStage>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  );
}

export default Stage;