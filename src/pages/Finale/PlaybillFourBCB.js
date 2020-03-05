import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourBCB = () => {


    const pages = [
        { 
            page: 1,
            content: "The Sophias are the murderers. But why did you do it Sophias?"
        },
        { 
            page: 2,
            content: "Ernie left one of us at the alter and if you mess with one Sophia you deal with us both and Bitana did a card trick that baffled Sophia One and if you mess with one of our brains you get the horns. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-bcb'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourBCB;
