import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourBBA = () => {


    const pages = [
        { 
            page: 1,
            content: "Professor Donk is the murderer. But why did you do it Professor Donk?"
        },
        { 
            page: 2,
            content: "Ernie was putting addictive chemicals into his sauce I became an addict and had to shut him down and Blake promised me a player from the Blakers to come by and they didn't so I was mad.. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-bba'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourBBA;
