import React, { useState } from 'react';
import './App.css';
import Start from "./Start"
import Game from "./Game"
import EndScreen from "./EndScreen"
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.onresize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  const [componentToRender, setcomponentToRender] = useState("start");
  const [counterRound, setcounterRound] = useState(0);
  const [name, setname] = useState("")
  const [resultWholeGame, setresultWholeGame] = useState("")



  const handleInfoGame = (componentToRender) => {
    setcomponentToRender(componentToRender)
  }
  if (componentToRender === "start") {
    return (
      <div className="background">
        < Start
          name={name}
          setname={setname}
          counterRound={counterRound}
          setcounterRound={setcounterRound}
          handleInfoGame={handleInfoGame}
        />
      </div>

    );
  }
  if (componentToRender === "game") {
    return (
      < Game
        name={name}
        counterRound={counterRound}
        handleInfoGame={handleInfoGame}
        setresultWholeGame={setresultWholeGame}
      />

    );
  }
  if (componentToRender === "end") {
    return (
      < EndScreen
        resultWholeGame={resultWholeGame}
        setresultWholeGame={setresultWholeGame}
        counterRound={counterRound}
        setcounterRound={setcounterRound}
        handleInfoGame={handleInfoGame}
      />

    );
  }
}

export default App;
