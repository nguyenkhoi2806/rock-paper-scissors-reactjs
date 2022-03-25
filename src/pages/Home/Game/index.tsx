import "./game.scss";

import Triangle from "../../../assets/images/bg-triangle.svg";
import GameItem from "../../../components/GameItem";
import { GAME_TYPES } from "../../../constant/gameTypes";

interface GameProps {
  handlePlayGame: Function;
}

function Game(props: GameProps) {
  const { handlePlayGame } = props;

  return (
    <div className="game">
      <img
        src={Triangle}
        alt="triangle-background"
        className="game-background"
      />
      {GAME_TYPES.map((gameType, index) => (
        <GameItem
          key={gameType.name + "_" + index}
          gameType={gameType}
          handlePlayGame={handlePlayGame}
        />
      ))}
    </div>
  );
}

export default Game;
