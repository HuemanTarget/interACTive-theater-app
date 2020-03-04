import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourAAA = () => {


    const pages = [
        { 
            page: 1,
            content: "Ernie Middleware is the murderer. But why did you do it Ernie?"
        },
        { 
            page: 2,
            content: "Professor Donk was trying to persuade my child laborers to leave my Sriracha Factory so he had to go and DJ Galindo released a diss track on his latest album making fun of my sauce and NO ONE does that.. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
        },
    ];

    
        
    
    
    return(
        <div>
            <div className="app">
            <FlipPage
                className="book"
                showSwipeHint
                uncutPages
                orientation="horizontal"
                width="440"
                height="600"
                pageBackground="#fffdf8"
                animationDuration="400"
            >
            {pages.map(page => (
            <article style={{ width: "400px ", padding: "10px 20px" }}>
                <p className='page'>{page.content}</p>
            </article>
            ))}
            </FlipPage>
            </div>
            <NavLink exact to='/results-aba'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourAAA;
