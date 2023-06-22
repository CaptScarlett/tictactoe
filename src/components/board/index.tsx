import Tile from "../tile";
import { Grid } from "./styles";
import { BoardProps } from "./types";

const Board = ({ board, player, turn }: BoardProps): JSX.Element => {
  const renderBoard = board.map((_value, index) => {
    return (
      <Tile
        value={board[index]}
        onClick={() => turn(index)}
        hoverValue={player}
        disabled={!!board[index]}
        key={index}
      />
    );
  });

  return <Grid>{renderBoard}</Grid>;
};

export default Board;
