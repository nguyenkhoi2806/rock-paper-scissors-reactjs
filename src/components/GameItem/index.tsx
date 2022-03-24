import "./game-item.scss";

interface GameItemProps {
  name?: string;
}

function GameItem(props: GameItemProps) {
  const { name = "paper" } = props;

  return (
    <div className={`game-item game-${name}`}>
      <div className="game-item__button">
        <span className={`game-item__${name} game-item__image`}></span>
      </div>
    </div>
  );
}

export default GameItem;
