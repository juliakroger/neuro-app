import { GameConfigProps } from "@/utils/gameConfig";
import React, { useEffect, useState } from "react";
import Box from "./Box";

interface Props {
  gameConfig: GameConfigProps;
  endGame: () => void;
}

const PlayGame = ({ gameConfig, endGame }: Props) => {
  const [round, setRound] = useState(0);
  const [lightBox, setLightBox] = useState(null);
  const [letter, setLetter] = useState("");
  const [trialAnalysis, setTrialAnalysis] = useState([]);
  const [responseCountDown, setResponseCountDown] = useState(0);
  const [jumpNext, setJumpNext] = useState(0);
  const [gameName, setGameName] = useState("");

  const identifyPressKey = ({ key }) => {
    const pressedKey = key.toUpperCase();

    let currentCountDown = 0;
    let currentRound = 0;
    let roundTrials = 0;
    let rightAnswer = false;

    setResponseCountDown((prev) => {
      currentCountDown = prev;
      return prev;
    });

    setRound((prev) => {
      currentRound = prev;
      return prev;
    });

    setTrialAnalysis((prev) =>
      prev.map((item) => {
        if (item.round === currentRound) {
          if (item.gameLetter === pressedKey) {
            rightAnswer = true;
          }
          const responses = [
            ...(item.responses || []),
            {
              currentCountDown: currentCountDown * 10,
              pressedKey,
            },
          ];
          roundTrials = responses.length;
          return {
            ...item,
            responses,
          };
        }
        return item;
      })
    );

    if (rightAnswer || roundTrials === gameConfig.triesAmount) {
      setJumpNext((prev) => prev + 1);
    }
    if (currentRound >= gameConfig.roundsAmount) {
      setTimeout(() => {
        document.removeEventListener("keydown", identifyPressKey);
      }, gameConfig.timeToRespond);
    }
  };

  useEffect(() => {
    const currentGame = `niji-game-${new Date().getTime()}`;
    setGameName(currentGame);
    const gameList = localStorage.getItem("niji-game-results-list") || "[]";
    const newList = [...JSON.parse(gameList), currentGame];
    localStorage.setItem("niji-game-results-list", JSON.stringify(newList));

    setTimeout(() => {
      setRound(1);
      document.addEventListener("keydown", identifyPressKey);
    }, 1000);
  }, []);

  useEffect(() => {
    if (trialAnalysis.length) {
      localStorage.setItem(gameName, JSON.stringify(trialAnalysis));
    }
  }, [trialAnalysis]);

  useEffect(() => {
    setResponseCountDown(0);
    const interval = setInterval(() => {
      setResponseCountDown((prev) => prev + 1);
    }, 1);

    return () => clearInterval(interval);
  }, [round]);

  useEffect(() => {
    if (round > 0) {
      if (gameConfig.timeToRespond > 0) {
        setLightBox(null);
        setLetter("");

        setTimeout(() => {
          setRound((prev) => prev + 1);
        }, gameConfig.timePerRound);
      } else {
        setLightBox(null);
        setLetter("");

        setTimeout(() => {
          setRound((prev) => prev + 1);
        }, gameConfig.timePerRound);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jumpNext]);

  useEffect(() => {
    if (gameConfig.timeToRespond > 0) {
      setTimeout(() => {
        let currentCountDown = 0;

        setResponseCountDown((prev) => {
          currentCountDown = prev;
          return prev;
        });

        if (currentCountDown * 10 >= gameConfig.timeToRespond) {
          setLightBox(null);
          setLetter("");
        }
      }, gameConfig.timeToRespond);

      const interval = setInterval(() => {
        setRound((prev) => prev + 1);
      }, gameConfig.timeToRespond + gameConfig.timePerRound);
      return () => clearInterval(interval);
    }
  }, [round]);

  useEffect(() => {
    if (round > 0 && round <= gameConfig.roundsAmount) {
      const nextNumber = gameConfig.letterPerBox[round - 1].box - 1;
      const nextLetter = gameConfig.letterPerBox[round - 1].letter;

      setTrialAnalysis((prev: []) => [
        ...prev,
        { round, gameLetter: nextLetter },
      ]);
      setLetter(nextLetter);
      setLightBox(nextNumber);
    }
  }, [round]);

  useEffect(() => {
    if (round >= gameConfig.roundsAmount && gameConfig.timeToRespond > 0) {
      setTimeout(() => {
        endGame();
      }, gameConfig.timeToRespond);
    }

    if (round > gameConfig.roundsAmount && gameConfig.timeToRespond <= 0) {
      setTimeout(() => {
        endGame();
      }, 500);
    }
  }, [round]);

  return (
    <div className="flex min-h-screen h-full w-full items-center justify-center">
      {Array.from(Array(gameConfig.boxesAmount).keys()).map((i) => (
        <Box
          key={i}
          color={gameConfig.feedbackColor}
          selected={lightBox === i}
          text={gameConfig.letterHint && lightBox === i ? letter : ""}
        />
      ))}
    </div>
  );
};

export default PlayGame;
