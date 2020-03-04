import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillThreeAA = () => {

    // const currTime = () => {
    //     var tempTime = new Date();
    //     var time = tempTime.getHours()+':'+ tempTime.getMinutes();
    //     const currTime = time;
    //     return currTime
    // }

    const pages = [
        { 
            page: 1,
            content: "Bitana The Great fell through the trap door screaming. DJ and The Sophias not being able to help ran back to join the other members of the cohort. They reach Ernie, Blake, and Zane what happened to Bitana when they hear a noise from the closet next to them."
        },
        { 
            page: 2,
            content: "They open up the closet and Papa Greg tied up. DJ removes the gag and proceeds to tell the group that he knows who the murderer is. The murderer is..."
        },
    ];

    
        
    
    
    return(
        <div>
            <NavLink exact to='/questions-three-a'>
                Last Question
            </NavLink>
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
        </div>
    )
}
export default PlaybillThreeAA;
