import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourCCA = () => {


    const pages = [
        { 
            page: 1,
            content: "Mustang Zane is the murderer. But why did you do it Mustang Zane?"
        },
        { 
            page: 2,
            content: "The Sophias were starting their porn studio and I didn't need the competition and Ernie was going to let use his factory for Girls Get Saucy but would only let us use the office and not the main factory floor. Sauce in an office is not sexy. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers."
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
            <NavLink exact to='/results-cca'>
                Results
            </NavLink>
        </div>
    )
}
export default PlaybillFourCCA;
