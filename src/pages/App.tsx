import { useState } from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Game from "@/pages/Game";
import PastGames from "@/pages/PastGames";
import gameConfig from "@/utils/gameConfig";
import "@/styles/index.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const resetTest = () => {
    setGameEnded(false);
    setGameStarted(true);
  };

  const endGame = () => {
    setGameEnded(true);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameEnded(false);
    setGameStarted(true);
  };

  let background = "bg-purple-pattern";
  if (gameConfig.gameColor === "blue") background = "bg-blue-pattern";
  if (gameConfig.gameColor === "orange") background = "bg-orange-pattern";

  return (
    <div
      className={`min-h-screen bg-fixed bg-contain bg-no-repeat bg-center ${background}`}
    >
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route
                index
                element={
                  <Game
                    gameConfig={gameConfig}
                    gameStarted={gameStarted}
                    gameEnded={gameEnded}
                    resetTest={resetTest}
                    endGame={endGame}
                    startGame={startGame}
                  />
                }
              />
              <Route path="past-games" element={<PastGames />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <PastGames />
    </div>
  );
};

export default App;
