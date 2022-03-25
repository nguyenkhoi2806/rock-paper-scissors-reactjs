import "./result.scss";

import GameItem from "../../../components/GameItem";
import GameType from "../../../models/GameType";

interface ResultProps {
  userPicked: GameType;
  computerPicked: GameType;
  playAgain: () => void;
  resultText: string;
}

function Result(props: ResultProps) {
  const { userPicked, computerPicked, playAgain, resultText } = props;

  return (
    <div className="result">
      <div className="result__item">
        <span>You picked</span>
        <GameItem gameType={userPicked} />
      </div>
      <div className="result__item result--show">
        <span className="result__item-text">You {resultText}</span>
        <button className="result__item-play-again" onClick={playAgain}>
          Play again
        </button>
      </div>
      <div className="result__item">
        <span>The House Picked</span>
        <GameItem gameType={computerPicked} />
      </div>
    </div>
  );
}

export default Result;
