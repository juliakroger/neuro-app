import GameEnd from "@/components/Game/GameEnd";
import GameInstructions from "@/components/Game/GameInstructions";
import PlayGame from "@/components/Game/PlayGame";

interface Props {
  gameStarted: boolean;
  gameEnded: boolean;
  resetTest: () => void;
  endGame: () => void;
  startGame: () => void;
  gameConfig: any;
}

const Game = ({
  gameConfig,
  gameStarted,
  gameEnded,
  resetTest,
  endGame,
  startGame,
}: Props) => {
  if (gameEnded) {
    return <GameEnd gameConfig={gameConfig} resetTest={resetTest} />;
  }

  if (gameStarted) {
    return <PlayGame gameConfig={gameConfig} endGame={endGame} />;
  }

  return <GameInstructions gameConfig={gameConfig} startGame={startGame} />;
};

export default Game;
