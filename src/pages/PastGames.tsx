import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { GameConfigProps } from "@/utils/gameConfig";
import { TrialAnalysisProps } from "@/components/Game/PlayGame";
import GameResultTable from "@/components/PastGames/GameResultTable";

interface GameHistory {
  id: string;
  game: TrialAnalysisProps[];
}

interface Props {
  gameConfig: GameConfigProps;
}

const PastGames = ({ gameConfig }: Props) => {
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);

  useEffect(() => {
    const gameList: string[] = JSON.parse(
      localStorage.getItem("niji-game-results-list") || "[]"
    );

    const history = gameList
      ?.map((id) => {
        const game = localStorage.getItem(id);
        return { id, game: game ? JSON.parse(game) : [] };
      })
      .filter(({ game }) => !!game?.length);

    setGameHistory(history);
  }, []);

  const background =
    gameConfig.gameColor === "blue"
      ? "bg-blue-900"
      : gameConfig.gameColor === "orange"
      ? "bg-orange-100"
      : "bg-purple-900";

  const gameHistoryGroup = gameHistory
    .reverse()
    .map(({ id, game }) => (
      <GameResultTable
        id={id}
        key={id}
        gameResults={game}
        timeToRespond={gameConfig.timeToRespond}
        background={background}
        gameColor={gameConfig.gameColor}
      />
    ));

  return (
    <div className="fixed overflow-y-auto flex flex-col items-center w-full h-full top-0 left-0">
      <div className="flex flex-col my-10 w-full max-w-[900px]">
        {gameHistoryGroup}
      </div>

      <Button
        buttonColor="purple"
        customClasses="fixed right-4 bottom-4"
        onClick={() => {
          // TODO: redirect to /
        }}
      >
        Back to game
      </Button>
    </div>
  );
};

export default PastGames;
