import "./result.scss";

import GameItem from "../../../components/GameItem";

function Result() {
  return (
    <div className="result">
      <div className="result__item">
        <span>You picked</span>
        <GameItem />
      </div>
      <div className="result__item result--show">
        <span className="result__item-text">You close</span>
        <button className="result__item-play-again">Play again</button>
      </div>
      <div className="result__item">
        <span>The House Picked</span>
        <GameItem />
      </div>
    </div>
  );
}

export default Result;
