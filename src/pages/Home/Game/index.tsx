import "./game.scss";

import Triangle from "../../../assets/images/bg-triangle.svg";

import GameItem from "../../../components/GameItem";
import { GAME_TYPES } from "../../../constant/gameTypes";
import GameType from "../../../models/GameType";

function Game() {
  const handlePlayGame = (gameType: GameType) => {
    console.log(gameType);
  };

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
