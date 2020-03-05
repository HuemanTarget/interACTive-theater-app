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
            content: "Professor Donk was trying to persuade my child laborers to leave my Sriracha Factory so he had to go and The Sophias were starting their own sauce Twinonnaise and I wanted to take out the competition before they got too big. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-aca'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourAAA;