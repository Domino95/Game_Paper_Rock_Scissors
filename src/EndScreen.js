import React from 'react';
import "./EndScreenStyle.css"

const EndScreen = (props) => {
    return (
        <div className="backgroundEnd">
            <div className="backgroundEndScreen">
                <h3>{props.resultWholeGame}</h3>
                <h4>You wanna play again? How many rounds you will choose?</h4>
                <button className={props.counterRound === 3 ? "roundButtonEndScreenActive" : 'roundButtonEndScreen'}
                    onClick={() => props.setcounterRound(3)}> 3</button>
                <button className={props.counterRound === 6 ? "roundButtonEndScreenActive" : 'roundButtonEndScreen'}
                    onClick={() => props.setcounterRound(6)}> 6</button>
                <button className={props.counterRound === 9 ? "roundButtonEndScreenActive" : 'roundButtonEndScreen'}
                    onClick={() => props.setcounterRound(9)}> 9</button>
                <button className={props.counterRound === 12 ? "roundButtonEndScreenActive" : 'roundButtonEndScreen'}
                    onClick={() => props.setcounterRound(12)}> 12</button>

                <button className="rematchButton" onClick={() => props.handleInfoGame("game")}>Play again</button>
            </div>
        </div>
    );
}
export default EndScreen;