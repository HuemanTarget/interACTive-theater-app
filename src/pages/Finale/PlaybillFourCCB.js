import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourCCB = () => {


    const pages = [
        { 
            page: 1,
            content: "Blake Johnson is the murderer. But why did you do it Blake Johnson?"
        },
        { 
            page: 2,
            content: "The Sofias were suppose to perform at the half-time show but instead failed to show and sent the bearded lady instead and Ernie was going to give his sauce away to the crowd if the Blakers scored 20 3's in a game but sabotaged my team by switching the Gatorade with Sriracha so they wouldn't do it. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-ccb'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourCCB;
