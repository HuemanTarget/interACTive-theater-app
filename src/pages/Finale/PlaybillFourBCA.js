import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourBCA = () => {


    const pages = [
        { 
            page: 1,
            content: "Professor Donk is the murderer. But why did you do it Professor Donk?"
        },
        { 
            page: 2,
            content: "Ernie was putting addictive chemicals into his sauce I became an addict and had to shut him down and Bitana The 'Not So' Great was dabbling in dark magic and needed to be stopped before she became too powerful. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-bca'>Results</NavLink>
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
export default PlaybillFourBCA;
