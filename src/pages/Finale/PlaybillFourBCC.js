import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourBCC = () => {


    const pages = [
        { 
            page: 1,
            content: "DJ Galindo is the murderer. But why did you do it DJ Galindo?"
        },
        { 
            page: 2,
            content: "Ernie ruined my music festival with tainted Sriracha sauce and Bitana was mad that I didn't give her a VIP Pass to the festival and made it rain one of the days. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-bcc'>Results</NavLink>
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
export default PlaybillFourBCC;
