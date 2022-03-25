import "./home.scss";

import Header from "./Header";
import Game from "./Game";
import { useState } from "react";
import GameType from "../../models/GameType";
import { GAME_TYPES } from "../../constant/gameTypes";
import GameRuleService from "../../services/gameRuleService";
import Result from "./Result";

function Home() {
  const [score, setScore] = useState<number>(0);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const [userPicked, setUserPicked] = useState<GameType>();
  const [computerPicked, setComputerPicked] = useState<GameType>();
  const [result, setResult] =
    useState<{ isWin: boolean; score: number; isDraw: boolean }>();

  const handlePlayGame = (userGameType: GameType) => {
    const computerGameType =
      GAME_TYPES[Math.floor(Math.random() * GAME_TYPES.length)];
    setUserPicked(userGameType);
    setComputerPicked(computerGameType);
    const result = GameRuleService.handleRule(userGameType, computerGameType);
    if (result) {
      setIsPlayed(true);
      setScore((prev) => prev + result.score);
      setResult(result);
    }
  };

  const getResultText = () => {
    if (!result) {
      return "";
    }

    if (result.isDraw) {
      return "Draw";
    } else {
      if (result.isWin) {
        return "Win";
      } else {
        return "Lose";
      }
    }
  };

  return (
    <div className="container">
      <Header score={score} />
      {isPlayed && userPicked && computerPicked ? (
        <Result
          userPicked={userPicked}
          computerPicked={computerPicked}
          playAgain={() => setIsPlayed(false)}
          resultText={getResultText()}
        />
      ) : (
        <Game handlePlayGame={handlePlayGame} />
      )}
    </div>
  );
}

export default Home;
