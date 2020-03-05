import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillThreeBC = () => {


    const pages = [
        { 
            page: 1,
            content: "Bitana The Great fell through the trap door screaming. Mustang Zane and Blake not being able to help run back to join the other members of the cohort. They reach Professor Donk, The Sophias, and DJ Galindo and tell them what happened when they hear a noise from the closet next to them."
        },
        { 
            page: 2,
            content: "They open up the closet and find Papa Greg tied up. Bitana removes the gag and Papa Greg proceeds to tell the group that he knows who the murderer is. The murderer is..."
        },
    ];

    
        
    return(
        <div>
            <NavLink exact to='/questions-three-bc'>
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
export default PlaybillThreeBC;
