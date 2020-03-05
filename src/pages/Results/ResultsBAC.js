import React from 'react';
import { NavLink } from 'react-router-dom'

const ResultsBAC = () => {
    return(
        <div>
            <h1>1 - Professor Donk Was Murdered First.</h1>
            <h1>2 - The Sophias Fell Through The Trap Door.</h1>
            <h1>3 - DJ Galindo Was Found To Be The Murderer.</h1> <br/>
            <h1>You Found One Of 27 Endings. Play Again To Find The Others.</h1>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
        </div>
    )
}

export default ResultsBAC;