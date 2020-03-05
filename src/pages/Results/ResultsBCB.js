import React from 'react';
import { NavLink } from 'react-router-dom'

const ResultsBCB = () => {
    return(
        <div>
            <h1>1 - Ernie Middleware Was Murdered First.</h1>
            <h1>2 - Bitana The Great Fell Through The Trap Door.</h1>
            <h1>3 - The Sophias Were Found To Be The Murderers.</h1> <br/>
            <h1>You Found One Of 27 Endings. Play Again To Find The Others.</h1>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
        </div>
    )
}

export default ResultsBCB;