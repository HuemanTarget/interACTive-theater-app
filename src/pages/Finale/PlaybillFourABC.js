import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourAAA = () => {


    const pages = [
        { 
            page: 1,
            content: "Mustang Zane is the murderer. But why did you do it Zane?"
        },
        { 
            page: 2,
            content: "Professor Donk was starting an anti-porn campaign and was tainting my audience so he had to go and The Sophias were supose to be in my next porno but backed out last second for 'legitimate' art. The room was really cold dammit! I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-abc'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourAAA;
