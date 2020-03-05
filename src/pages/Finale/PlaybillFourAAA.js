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
            content: "Professor Donk was trying to persuade my child laborers to leave my Sriracha Factory so he had to go and Bitana The Great made had a day job as a County Health Inspector and was trying to shut me down for health code violations. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-aaa'>Results</NavLink>
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
                <p className='page'>{page.content}{page.link}</p>
            </article>
            ))}
            </FlipPage>
            </div>
            <NavLink exact to='/results-aaa'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourAAA;
