export interface GameConfigProps {
  gameColor?: string;
  feedbackColor?: string;
  roundsAmount: number;
  triesAmount: number;
  timeToRespond: number;
  timePerRound: number;
  boxesAmount: number;
  letterHint: boolean;
  letterPerBox: {
    round: number;
    letter: string;
    box: number;
  }[];
}

const gameConfig = {
  gameColor: "", // Options: blue, orange and purple (purple is the default)
  feedbackColor: "", // Options: yellow, blue and orange (orange is the default)
  roundsAmount: 10,
  triesAmount: 0,
  timeToRespond: 2000, // Timeout to respond, if set to 0 the letter gets "stuck" until keyboard response
  timePerRound: 800, // Time between responses
  boxesAmount: 4, // Number of boxes
  letterHint: true, // Turn it on if the letter is supposed to be shown on the box
  letterPerBox: [
    { round: 1, letter: "N", box: 3 },
    { round: 2, letter: "V", box: 2 },
    { round: 3, letter: "C", box: 1 },
    { round: 4, letter: "V", box: 2 },
    { round: 5, letter: "M", box: 4 },
    { round: 6, letter: "N", box: 3 },
    { round: 7, letter: "C", box: 1 },
    { round: 8, letter: "V", box: 2 },
    { round: 9, letter: "M", box: 4 },
    { round: 10, letter: "V", box: 2 },
  ],
};

export default gameConfig;
