import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom'

import './style.css';

const PlaybillFourAAC = () => {


    const pages = [
        { 
            page: 1,
            content: "Mustang Zane is the murderer. But why did you do it Zane?"
        },
        { 
            page: 2,
            content: "Professor Donk was starting an anti-porn campaign and was tainting my audience so he had to go and Bitana The Great had a part in my first porno before she made it big and laughed at me on set during my first scene. The room was really cold dammit! I would've gotten away with it all if it wasn't for you meddling students and your damn teachers.",
            link: <NavLink exact to='/results-aac'>Results</NavLink>
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
export default PlaybillFourAAC;
