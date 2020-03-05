import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourBAB = () => {


    const pages = [
        { 
            page: 1,
            content: "The Sophias are the murderers. But why did you do it Sophias?"
        },
        { 
            page: 2,
            content: "Ernie left one of us at the alter and if you mess with one Sophia you deal with us both and Mustang Zane was trying to sell our nude pics to TMZ and had to be stopped. I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-bab'>Results</NavLink>
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
export default PlaybillFourBAB;
