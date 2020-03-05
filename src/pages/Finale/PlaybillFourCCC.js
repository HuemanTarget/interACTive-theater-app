import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourCCC = () => {


    const pages = [
        { 
            page: 1,
            content: "Bitana The Great is the murderer. But why did you do it Bitana The Great?"
        },
        { 
            page: 2,
            content: "The Sophias tried to battle me with white magic and lost and Ernie hired me to perform magic at his company Holiday Party but cancelled the day before when BTS became available to perform. I lost out on other gigs for that. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-ccc'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourCCC;
