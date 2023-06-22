import Board from "../../components/board";
import Banner from "../../components/banner";
import useGame from "../../hooks/useGame";
import Button from "../../components/button";
const Main = (): JSX.Element => {
  const { board, player, gameStatus, turn, newGame } = useGame();

  return (
    <>
      <Banner>{gameStatus}</Banner>
      <Board board={board} player={player} turn={turn} />
      <Banner>
        <Button label="New Game" onClick={() => newGame()} />
      </Banner>
    </>
  );
};

export default Main;
