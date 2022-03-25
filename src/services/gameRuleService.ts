import { PAPER, ROCK, SCISSORS } from "../constant/gameTypes";
import GameType from "../models/GameType";

const GameRuleService = {
  handleRule: function (userPicked: GameType, computerPicked: GameType) {
    if (userPicked.name === computerPicked.name) {
      return this.handleResult(false, 0, true);
    }

    if (userPicked.name === PAPER) {
      if (computerPicked.name === SCISSORS) {
        return this.handleResult(false, -1, false);
      } else if (computerPicked.name === ROCK) {
        return this.handleResult(true, 1, false);
      }
    } else if (userPicked.name === SCISSORS) {
      if (computerPicked.name === PAPER) {
        return this.handleResult(true, 1, false);
      } else if (computerPicked.name === ROCK) {
        return this.handleResult(false, -1, false);
      }
    } else if (userPicked.name === ROCK) {
      if (computerPicked.name === PAPER) {
        return this.handleResult(false, -1, false);
      } else if (computerPicked.name === SCISSORS) {
        return this.handleResult(true, 1, false);
      }
    }
  },

  handleResult: function (isWin: boolean, score: number, isDraw: boolean) {
    return {
      isDraw,
      isWin,
      score,
    };
  },
};

export default GameRuleService;
