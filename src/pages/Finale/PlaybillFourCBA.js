import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourCBA = () => {


    const pages = [
        { 
            page: 1,
            content: "Mustang Zane is the murderer. But why did you do it Mustang Zane?"
        },
        { 
            page: 2,
            content: "The Sophias were starting their porn studio and I didn't need the competition and Professor Donk was trying to collect some of my younger stars for his devious purposes. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-cba'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourCBA;
