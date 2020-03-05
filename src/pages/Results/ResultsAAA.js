import React from 'react';
import { NavLink } from 'react-router-dom'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon } from 'react-share'

import './style.css'

const ResultsAAA = () => {

    return(
        <>
        <div className='results'>
            <h3>1 - Professor Donk Was Murdered First.</h3>
            <h3>2 - Bitana The Great Fell Through The Trap Door.</h3>
            <h3>3 - Ernie Middleware Was Found To Be The Murderer.</h3> <br/>
            <h3>You Found One Of 27 Endings. Play Again To Find The Others.</h3>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
            <h3>Share Your Results of Facebook, Reddit, and Twitter</h3>
        </div>
        <div className='share'>
            <FacebookShareButton
                url="www.example.com"
                quote="Professor Donk and Bitana The Great were just murdered by Ernie Middleware. I found 1 of 27 endings.">
                <FacebookIcon
                size={60}
                round
            />
            </FacebookShareButton>
            <TwitterShareButton
                url="www.example.com"
                quote="Professor Donk and Bitana The Great were just murdered by Ernie Middleware. I found 1 of 27 endings.">
                <TwitterIcon
                size={60}
                round
            />
            </TwitterShareButton>
            <RedditShareButton
                url="www.example.com"
                quote="Professor Donk and Bitana The Great were just murdered by Ernie Middleware. I found 1 of 27 endings.">
                <RedditIcon
                size={60}
                round
            />
            </RedditShareButton>
        </div>
        </>
    )
}

export default ResultsAAA;