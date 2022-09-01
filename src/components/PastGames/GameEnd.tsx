import { useEffect, useState } from "react";
import { GameConfigProps } from "@/utils/gameConfig";
import { TrialAnalysisProps } from "@/components/Game/PlayGame";
import Button from "@/components/Button";

// import GameResultChart from "./GameResultChart";
import GameResultTable from "./GameResultTable";

interface Props {
  gameConfig: GameConfigProps;
  resetTest: () => void;
}

interface GameResultProps {
  browserLanguage: string;
  gameResults?: TrialAnalysisProps[];
}

const GameEnd = ({ gameConfig, resetTest }: Props) => {
  const [finishedGame, setFinishedGame] = useState<null | GameResultProps>(
    null
  );
  const [lastGameId, setLastGameId] = useState("");

  const getConfig = () => {
    const game: GameResultProps = {
      browserLanguage: navigator.language,
      gameResults: undefined,
    };

    const gameList = JSON.parse(
      localStorage.getItem("niji-game-results-list") || ""
    );
    const lastGame = localStorage.getItem(gameList?.pop() || {});
    setLastGameId(lastGame || "");
    game.gameResults = lastGame ? JSON.parse(lastGame) : [];

    setFinishedGame(game);
  };

  useEffect(() => {
    getConfig();
  }, []);

  const background =
    gameConfig.gameColor === "blue"
      ? "bg-blue-900"
      : gameConfig.gameColor === "orange"
      ? "bg-orange-100"
      : "bg-purple-900";

  return (
    <div className="fixed overflow-y-auto flex flex-col items-center w-full h-full top-0 left-0">
      <div className="mt-10">
        Congratulations! You completed the brain health activity. Check out your
        game result:
      </div>

      <div className="flex flex-col mt-10 w-full max-w-[900px]">
        {/* <GameResultChart
          gameResults={finishedGame?.gameResults}
          timeToRespond={gameConfig.timeToRespond}
          background={background}
        /> */}

        <GameResultTable
          gameResults={finishedGame?.gameResults || []}
          timeToRespond={gameConfig.timeToRespond}
          background={background}
          gameColor={gameConfig.gameColor}
          id={lastGameId}
        />
      </div>

      <Button
        buttonColor="purple"
        customClasses="fixed left-4 bottom-4"
        onClick={() => {
          // TODO: redirect to past games
        }}
      >
        Finish Game
      </Button>

      <Button onClick={resetTest} customClasses="fixed right-4 bottom-4">
        Repeat Test
      </Button>
    </div>
  );
};

export default GameEnd;
