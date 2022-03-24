import "./game.scss";

import Triangle from "../../../assets/images/bg-triangle.svg";

function Game() {
  return (
    <div className="game">
      <img
        src={Triangle}
        alt="triangle-background"
        className="game-background"
      />
      <div className="game__item game__paper">
        <div className="game__item-button">
          <span className="game__item-paper game__item-image"></span>
        </div>
      </div>
      <div className="game__item game__scissors">
        <div className="game__item-button">
          <span className="game__item-scissors game__item-image"></span>
        </div>
      </div>
      <div className="game__item game__rock">
        <div className="game__item-button">
          <span className="game__item-rock game__item-image"></span>
        </div>
      </div>
    </div>
  );
}

export default Game;
