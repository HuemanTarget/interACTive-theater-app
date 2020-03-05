import React from 'react';
import { NavLink } from 'react-router-dom'

const ResultsBBC = () => {
    return(
        <div>
            <h1>1 - Ernie Middleware Was Murdered First.</h1>
            <h1>2 - Blake Johnson Fell Through The Trap Door.</h1>
            <h1>3 - DJ Galindo Was Found To Be The Murderer.</h1> <br/>
            <h1>You Found One Of 27 Endings. Play Again To Find The Others.</h1>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
        </div>
    )
}

export default ResultsBBC;