import GameType from "../models/GameType";

export const PAPER = "paper";
export const SCISSORS = "scissors";
export const ROCK = "rock";

export const GAME_TYPES = [
  new GameType(PAPER),
  new GameType(SCISSORS),
  new GameType(ROCK),
];
