import React, { useState } from 'react';


const Start = (props) => {
    const [startButtonActive, setstartButton] = useState(true);
    return (
        <>

            <div className="title"> <div>Paper, </div><div>Rock, </div> <div> Scissors</div></div>
            <h5>Epic game versus the computer</h5>

            {startButtonActive ? <div onClick={() => setstartButton(!startButtonActive)} className="startButton">  Start </div> : null}

            {!startButtonActive && props.counterRound === 0 ? <div className="roundBox">
                <h3>How many rounds do you wanna play?</h3>
                <div className="roundButton" onClick={() => props.setcounterRound(3)}> 3</div>
                <div className="roundButton" onClick={() => props.setcounterRound(6)}> 6</div>
                <div className="roundButton" onClick={() => props.setcounterRound(9)} > 9</div>
                <div className="roundButton" onClick={() => props.setcounterRound(12)} > 12</div>
            </div> : null}

            {props.counterRound !== 0 ? <div className="nameBox">
                <h3>Your name</h3>

                <input className="playerName" onChange={(e) => props.setname(e.target.value)} value={props.name} />
                <div className="accept" onClick={() => props.handleInfoGame("game")}>
                    Play
                </div>
            </div> : null}
        </>
    );
}

export default Start;