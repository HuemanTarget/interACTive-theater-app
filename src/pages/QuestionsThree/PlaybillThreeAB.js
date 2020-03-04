import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillTwoB = () => {

    // const currTime = () => {
    //     var tempTime = new Date();
    //     var time = tempTime.getHours()+':'+ tempTime.getMinutes();
    //     const currTime = time;
    //     return currTime
    // }

    const pages = [
        { 
            page: 1,
            content: "The lights came back on and Ernie Middleware, heir to the vast Sriracha fortune, was found slumped over in his chair dead. Not knowing who invited them on this trip the cohort decided to split up to find help. Mustang Zane, Blake, and Bitana moved towards the front of the train while Professor Donk, The Sophias, and DJ moved to the back. Unaware that more danger still lurked at every corner."
        },
        { 
            page: 2,
            content: "Mustang Zane, Blake, and Bitana walked gingerly looking for help with no one else in sight. They finally made it up to the locomotive car to find no one is driving the train. They walk back to find the other cohort members when a panel in the floor opens up."
        },
    ];

    return(
        <div>
            <NavLink exact to='/questions-two-b'>
                Questions Two
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
export default PlaybillTwoB;
