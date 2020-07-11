import React, { useState } from 'react';
import "./GameStyle.css"

const Game = (props) => {
    let [numberRound, setnumberRound] = useState(1)
    let [scorePlayer, setscorePlayer] = useState(0)
    let [scoreComputer, setscoreComputer] = useState(0)
    let [result, setresult] = useState()
    let [isweaponchosed, setisweaponchosed] = useState(false)
    let [weaponChosed, setweaponChosed] = useState()
    let [weaponChosedComputer, setweaponChosedComputer] = useState()

    const setStore = () => {
        switch (result) {
            case ("WYGRANA"):
                setscorePlayer(scorePlayer = scorePlayer + 1)
                break;
            case ("PRZEGRANA"):
                setscoreComputer(scoreComputer = scoreComputer + 1)
                break;
            default:
                console.log("something wrong...")
        }
        setnumberRound(numberRound = numberRound + 1)

        if (numberRound === props.counterRound + 1) {
            if (scorePlayer > scoreComputer) {
                props.setresultWholeGame("Wygrałeś!")
            }
            else if (scorePlayer < scoreComputer) {
                props.setresultWholeGame("Przegrałeś")
            }
            else {
                props.setresultWholeGame("Remis")
            }
            props.handleInfoGame("end")
        }
        else {
            setisweaponchosed(false)
        }
    }


    const calculateResult = (weapon) => {
        let arraySelection = ["paper", "rock", "scissors"]
        let computerSelection = arraySelection[Math.floor(Math.random() * arraySelection.length)]
        setweaponChosedComputer(computerSelection)
        setweaponChosed(weapon)
        setisweaponchosed(true)
        switch (weapon) {
            case ("paper"):
                switch (computerSelection) {
                    case ("paper"):
                        setresult("REMIS")
                        break;
                    case ("rock"):
                        setresult("WYGRANA")
                        break;
                    case ("scissors"):
                        setresult("PRZEGRANA")
                        break;
                    default:
                }
                break;
            case ("rock"):
                switch (computerSelection) {
                    case ("paper"):
                        setresult("PRZEGRANA")
                        break;
                    case ("rock"):
                        setresult("REMIS")
                        break;
                    case ("scissors"):
                        setresult("WYGRANA")
                        break;
                    default:
                }
                break;
            case ("scissors"):
                switch (computerSelection) {
                    case ("paper"):
                        setresult("WYGRANA")
                        break;
                    case ("rock"):
                        setresult("PRZEGRANA")
                        break;
                    case ("scissors"):
                        setresult("REMIS")
                        break;
                    default:
                }
                break;
            default:
        }
    }

    return (

        <>
            <div className="titleBackground">
                Papier, Kamień, Nożyce
            </div>
            <div className="result">
                <div className="playerBox">
                    {props.name === "" ? "ANONIM: " : props.name.toUpperCase()}
                    <h1>{scorePlayer} </h1></div>
                <div className="playerBox"> VS.</div>
                <div className="playerBox">KOMPUTER <h1> {scoreComputer}</h1></div>
            </div>
            <div className="roundContainer">
                Round  {numberRound} / {props.counterRound}
            </div>

            {isweaponchosed ?
                <div className="weapon">
                    <div className="weaponChosed" >
                        <div className="weaponResult">
                            <h3>{result}</h3>
                            <div className="continueButton" onClick={() => setStore()}>Kontynuuj</div>
                        </div>
                        <div className="choiseBox">
                            <h3 className="yourChoiceText">Twój wybór</h3>
                            <div className="weapons" > <div className={`${weaponChosed}Img`} /></div>
                        </div>
                        <div className="choiseBox2">
                            <h3 className="yourChoiceText">Wybór komputera</h3>
                            <div className="weapons" > <div className={`${weaponChosedComputer}Img`} /></div>
                        </div>
                    </div>
                </div>

                :
                <div className="backroundweapon">
                    <div className="weapon">
                        <h3>Wybierz swoją broń</h3>
                        <div className="weapon-inner">
                            <div className="weapons" > <div className="paperImg" onClick={() => calculateResult("paper")} /></div>
                            <div className="weapons"> <div className="rockImg" onClick={() => calculateResult("rock")} /></div>
                            <div className="weapons" > <div className="scissorsImg" onClick={() => calculateResult("scissors")} /></div>
                        </div>
                    </div>
                </div>
            }


        </>
    );
}

export default Game;