import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourAAB = () => {


    const pages = [
        { 
            page: 1,
            content: "Blake Johnson is the murderer. But why did you do it Blake?"
        },
        { 
            page: 2,
            content: "Professor Donk was disrupting my youth b-ball camps and had to go for their safety while Bitana The Great was into the dark arts and I'm just not into that crap. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-aab'>Results</NavLink>
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
                width="450"
                height="650"
                pageBackground="#fffdf8"
                animationDuration="400"
            >
            {pages.map(page => (
            <article style={{ width: "400px ", padding: "10px 20px" }}>
                <p className='page'>{page.content}</p>
                <p>{page.link}</p>
            </article>
            ))}
            </FlipPage>
            </div>
        </div>
    )
}
export default PlaybillFourAAB;
