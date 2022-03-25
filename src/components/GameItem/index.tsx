import GameType from "../../models/GameType";
import "./game-item.scss";

interface GameItemProps {
  gameType: GameType;
  handlePlayGame?: Function;
}

function GameItem(props: GameItemProps) {
  const { gameType, handlePlayGame = () => null } = props;

  return (
    <div
      className={`game-item game-${gameType.name}`}
      onClick={() => handlePlayGame(gameType)}
    >
      <div className="game-item__button">
        <span className={`game-item__${gameType.name} game-item__image`}></span>
      </div>
    </div>
  );
}

export default GameItem;
