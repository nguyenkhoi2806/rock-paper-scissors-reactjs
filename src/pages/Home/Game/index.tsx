import "./game.scss";

import Triangle from "../../../assets/images/bg-triangle.svg";

import GameItem from "../../../components/GameItem";

function Game() {
  return (
    <div className="game">
      <img
        src={Triangle}
        alt="triangle-background"
        className="game-background"
      />
      <GameItem name="paper" />
      <GameItem name="scissors" />
      <GameItem name="rock" />
    </div>
  );
}

export default Game;
