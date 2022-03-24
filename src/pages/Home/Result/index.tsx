import "./result.scss";

function Result() {
  return (
    <div className="result">
      <div className="result__item">
        <span>You picked</span>
      </div>
      <div className="result__item result--show">
        <span className="result__item-text">You close</span>
        <button className="result__item-play-again">Play again</button>
      </div>
      <div className="result__item">
        <span>The House Picked</span>
      </div>
    </div>
  );
}

export default Result;
