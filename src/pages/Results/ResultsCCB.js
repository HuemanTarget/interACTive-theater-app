import React from 'react';
import { NavLink } from 'react-router-dom'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon } from 'react-share'

const ResultsCCB = () => {
    return(
        <>
        <div>
            <h3>1 - The Sofias Was Murdered First.</h3>
            <h3>2 - Ernie Middleware Fell Through The Trap Door.</h3>
            <h3>3 - Blake Johnson Was Found To Be The Murderers.</h3> <br/>
            <h3>You Found One Of 27 Endings. Play Again To Find The Others.</h3>
            <NavLink exact to='/playbill'>
                Try Again
            </NavLink>
            <h3>Share Your Results of Facebook, Twitter, and Reddit.</h3>
        </div>
        <div className='share'>
            <FacebookShareButton
                url="https://interactive-theatrical-app.firebaseapp.com/"
                quote="The Sofias and Ernie Middleware were just murdered by Blake Johnson. I found 1 of 27 endings.">
                <FacebookIcon
                size={60}
                round
            />
            </FacebookShareButton>
            <TwitterShareButton
                url="https://interactive-theatrical-app.firebaseapp.com/"
                quote="The Sofias and Ernie Middleware were just murdered by Blake Johnson. I found 1 of 27 endings.">
                <TwitterIcon
                size={60}
                round
            />
            </TwitterShareButton>
            <RedditShareButton
                url="https://interactive-theatrical-app.firebaseapp.com/"
                quote="The Sofias and Ernie Middleware were just murdered by Blake Johnson. I found 1 of 27 endings.">
                <RedditIcon
                size={60}
                round
            />
            </RedditShareButton>
        </div>
        </>
    )
}

export default ResultsCCB;