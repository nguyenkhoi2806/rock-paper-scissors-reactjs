import "./result.scss";

import GameItem from "../../../components/GameItem";
import GameType from "../../../models/GameType";

interface ResultProps {
  gameType: GameType;
}

function Result(props: ResultProps) {
  const { gameType } = props;

  return (
    <div className="result">
      <div className="result__item">
        <span>You picked</span>
        <GameItem gameType={gameType} />
      </div>
      <div className="result__item result--show">
        <span className="result__item-text">You close</span>
        <button className="result__item-play-again">Play again</button>
      </div>
      <div className="result__item">
        <span>The House Picked</span>
        <GameItem gameType={gameType} />
      </div>
    </div>
  );
}

export default Result;
