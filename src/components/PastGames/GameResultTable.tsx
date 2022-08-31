import { useState } from "react";
import { TrialAnalysisProps } from "@/components/Game/PlayGame";

import CheckYellow from "@/assets/icons/CheckYellow";
import Check from "@/assets/icons/Check";
import Cancel from "@/assets/icons/Cancel";

interface Props {
  gameResults?: TrialAnalysisProps[];
  timeToRespond: number;
  background?: string;
  gameColor?: string;
}

const ExpandableResults = ({
  gameResults,
  timeToRespond,
  background,
  gameColor,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const tableBodyClassName = `p-2.5 ${
    gameColor === "blue"
      ? "bg-blue-400"
      : gameColor === "orange"
      ? "bg-orange-100"
      : "bg-purple-400"
  }`;

  const tableHeaderClassName = `p-2 uppercase ${
    gameColor === "blue"
      ? "bg-blue-800"
      : gameColor === "orange"
      ? "bg-orange-700"
      : "bg-purple-500"
  }`;

  const results = gameResults?.reduce(
    (acc, game) => {
      let isAnswerRight = false;
      let maxTime = 0;
      game?.responses?.map(({ pressedKey, currentCountDown }) => {
        maxTime = currentCountDown;
        if (
          pressedKey === game.gameLetter &&
          currentCountDown <= timeToRespond
        ) {
          isAnswerRight = true;
        }
      });
      if (isAnswerRight) {
        acc.totalCorrect += 1;
      } else {
        acc.totalIncorrect += 1;
      }
      acc.totalTime += maxTime;
      return acc;
    },
    {
      totalCorrect: 0,
      totalIncorrect: 0,
      totalTime: 0,
      totalRounds: gameResults.length,
    }
  );

  const {
    totalCorrect = 0,
    totalIncorrect = 0,
    totalTime = 0,
    totalRounds = 0,
  } = results || {};

  return (
    <div className={`mt-4 p-4 rounded-xl ${background}`}>
      <div className="flex justify-between">
        <div>Session Details</div>
        <button
          type="button"
          className="text-sm underline"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "Hide details" : "Show details"}
        </button>
      </div>

      {isOpen && (
        <div className="w-full mt-4 text-xs shadow-2xl text-white">
          <table className="w-full">
            <thead>
              <tr>
                <th className={tableHeaderClassName}>Round</th>
                <th className={tableHeaderClassName}>round letter</th>
                <th className={tableHeaderClassName}>responses</th>
                <th className={tableHeaderClassName} />
              </tr>
            </thead>
            <tbody>
              {gameResults?.map(
                ({ round, gameLetter, responses }: TrialAnalysisProps) => {
                  let rightAnswer = 0;

                  const className = `${
                    gameColor === "blue"
                      ? "bg-blue-400 odd:bg-blue-600"
                      : gameColor === "orange"
                      ? "bg-orange-100 odd:bg-orange-200"
                      : "bg-purple-400 odd:bg-purple-200"
                  }`;

                  return (
                    <tr className={className}>
                      <th className="p-2.5">{round} round</th>
                      <th className="p-2.5">{gameLetter}</th>
                      <th className="p-2.5">
                        {responses?.map(
                          (
                            response: {
                              currentCountDown: number;
                              pressedKey: string;
                            },
                            i
                          ) => {
                            const { pressedKey, currentCountDown } = response;
                            const isAnswerRight = pressedKey === gameLetter;
                            if (currentCountDown <= timeToRespond) {
                              if (isAnswerRight) {
                                rightAnswer = 1;
                              }
                              if (isAnswerRight && i > 0) {
                                rightAnswer = 2;
                              }
                            }
                            return (
                              <div className="answer-row">
                                {`Pressed letter ${pressedKey} in ${
                                  currentCountDown / 1000
                                }s`}
                              </div>
                            );
                          }
                        )}
                      </th>
                      <th className="flex items-center pt-3">
                        {rightAnswer > 0 ? (
                          rightAnswer > 1 ? (
                            <CheckYellow />
                          ) : (
                            <Check />
                          )
                        ) : (
                          <Cancel />
                        )}
                      </th>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>

          <table className="w-full">
            <thead>
              <tr>
                <th className={tableHeaderClassName}>total rounds</th>
                <th className={tableHeaderClassName}>total rounds correct</th>
                <th className={tableHeaderClassName}>total rounds incorrect</th>
                <th className={tableHeaderClassName}>total time</th>
                <th className={tableHeaderClassName}>Average Time per round</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={tableBodyClassName}>{totalRounds}</th>
                <th className={tableBodyClassName}>
                  {`${totalCorrect} (${(totalCorrect * 100) / totalRounds}%)`}
                </th>
                <th className={tableBodyClassName}>
                  {`${totalIncorrect} (${
                    (totalIncorrect * 100) / totalRounds
                  }%)`}
                </th>
                <th className={tableBodyClassName}>{totalTime / 1000}s</th>
                <th className={tableBodyClassName}>
                  {totalTime / totalRounds / 1000}s
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpandableResults;
