import React, { useState } from "react";
import { AddPlayer } from "./AddPlayer";
import { ScoreCard } from "./ScoreCard";
import { GameCard } from "./GameCard";

export default function TicTacToeContainer() {
  const [firstUser, setFirstUser] = useState({ firstName: "", lastName: "" });
  const [secondUser, setSecondUser] = useState({ firstName: "", lastName: "" });

  return (
    <div className="container">
      <div id="addPalyer" class="row align-items-start mt-4">
        <AddPlayer
          firstUser={firstUser}
          setFirstUser={setFirstUser}
          secondUser={secondUser}
          setSecondUser={setSecondUser}
        />
        <ScoreCard firstUser={firstUser} secondUser={secondUser} />
      </div>
      <GameCard firstUser={firstUser} secondUser={secondUser} />
    </div>
  );
}
