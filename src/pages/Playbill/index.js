import React from 'react';
import FlipPage from "react-flip-page";
import { NavLink } from 'react-router-dom';

import './style.css';

const Playbill = () => {

    const pages = [
        { 
            page: 1,
            title: "Murder On The Cohort Express", 
            picture: <img src="https://media.newyorker.com/photos/5a0dbe6e2c4e135599ca7016/master/w_1600%2Cc_limit/171127_r31016.jpg" width="360" alt="computer" />,
            titletwo: "An InterACTive Murder Mystery" 
        },
        { 
            page: 2,
            title: "How This Works", 
            content: "You will be given a series of questions during the story. Your answers change how the story moves forward. There are twenty seven different story lines available. Can you find them all?" 
        },
        { 
            page: 3,
            title: "Cast Of Characters",
            titletwo: "1). Professor Donk", 
            contenttwo: "Professor of Child Studies",
            titlethree: "2). The Sophias",
            contentthree: "Siamese-Twin Circus Performers",
            titlefour: "3). Ernie Middleware",
            contentfour: "Heir to the Sriracha Fortune",
            titlefive: "4). Bitana The Great",
            contentfive: "Black Magic Mamma (She made me write this)",
        },
        { 
            page: 4,
            title: "Cast Cont'd",
            titletwo: "5). DJ Galindo", 
            contenttwo: "Mixes Massive Beats and Jams",
            titlethree: "6). Mustang Zane",
            contentthree: "70's Porn Star with a Massive....You Shut Yo Mouth",
            titlefour: "7). Blake Johnson",
            contentfour: "Player / Owner of the Basketball Dynasty Blakers",
        },
        { 
            page: 5,
            title: "Story",
            content: "It was a night much like every other night when seven members of the SEI-69 Cohort were invited to take a trip on the exclusive Cohort Express from DTLA to Universal Studios Hollywood. Not knowing who invited them there, the group assembled in the dinning car for a meal fit for royalty, Papa Johns. As the scrumptious meal of cold bread sticks, dried chicken balls, and shriveled pizza were served to the guests the lights went out and a scream was heard!",
            link: <NavLink exact to='/questions-one'>Questions One</NavLink>
        }
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
                <h1>{page.title}</h1>
                <div>{page.picture}</div>
                <p>{page.titletwo}</p>
                <p>{page.contenttwo}</p>
                <p>{page.titlethree}</p>
                <p>{page.contentthree}</p>
                <p>{page.titlefour}</p>
                <p>{page.contentfour}</p>
                <p>{page.titlefive}</p>
                <p>{page.contentfive}</p>
                <p className='page'>{page.content}</p>
                <p>{page.link}</p>
            </article>
            ))}
            </FlipPage>
            </div>
        </div>
    )
}
export default Playbill
