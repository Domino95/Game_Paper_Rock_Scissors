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
            case ("You win"):
                setscorePlayer(scorePlayer = scorePlayer + 1)
                break;
            case ("You lose"):
                setscoreComputer(scoreComputer = scoreComputer + 1)
                break;
            case ("Draw"):
                break;
            default:
                console.log("something wrong...")
        }
        setnumberRound(numberRound = numberRound + 1)

        if (numberRound === props.counterRound + 1) {
            if (scorePlayer > scoreComputer) {
                props.setresultWholeGame("You win!")
            }
            else if (scorePlayer < scoreComputer) {
                props.setresultWholeGame("You lose")
            }
            else {
                props.setresultWholeGame("Draw")
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
                        setresult("Draw")
                        break;
                    case ("rock"):
                        setresult("You win")
                        break;
                    case ("scissors"):
                        setresult("You lose")
                        break;
                    default:
                }
                break;
            case ("rock"):
                switch (computerSelection) {
                    case ("paper"):
                        setresult("You lose")
                        break;
                    case ("rock"):
                        setresult("Draw")
                        break;
                    case ("scissors"):
                        setresult("You win")
                        break;
                    default:
                }
                break;
            case ("scissors"):
                switch (computerSelection) {
                    case ("paper"):
                        setresult("You win")
                        break;
                    case ("rock"):
                        setresult("You lose")
                        break;
                    case ("scissors"):
                        setresult("Draw")
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
                Paper, Rock, Scissors
            </div>
            <div className="result">
                <div className="playerBox">
                    {props.name === "" ? "ANONYMOUS " : props.name.toUpperCase()}
                    <h1>{scorePlayer} </h1></div>
                <div className="playerBox"> VS.</div>
                <div className="playerBox">COMPUTER<h1> {scoreComputer}</h1></div>
            </div>
            <div className="roundContainer">
                Round  {numberRound} / {props.counterRound}
            </div>
            {isweaponchosed ?
                <div className="weapon">
                    <div className="weaponChosed" >
                        <div className="weaponResult">
                            <h3>{result}</h3>
                            <div className="continueButton" onClick={() => setStore()}>Continue</div>
                        </div>
                        <div className="choiseBox">
                            <h3 className="yourChoiceText">Your choise</h3>
                            <div className="weapons" > <div className={`${weaponChosed}Img`} /></div>
                        </div>
                        <div className="choiseBox2">
                            <h3 className="yourChoiceText">Computer choise</h3>
                            <div className="weapons" > <div className={`${weaponChosedComputer}Img`} /></div>
                        </div>
                    </div>
                </div>
                :
                <div className="backroundweapon">
                    <div className="weapon">
                        <h3>Choose your weapon</h3>
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