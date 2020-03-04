import React from 'react';
import { NavLink } from 'react-router-dom'

const ResultsABB = () => {
    return(
        <div>
            <h1>1 - Professor Donk Was Murdered First.</h1>
            <h1>2 - DJ Galindo Fell Through The Trap Door.</h1>
            <h1>3 - Blake Johnson Was Found To Be The Murderer.</h1> <br/>
            <h1>You Found One Of 27 Endings. Play Again To Find The Othere</h1>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
        </div>
    )
}

export default ResultsABB;