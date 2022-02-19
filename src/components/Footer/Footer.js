import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='social-media'>
                <a href='/'><img alt='Some Text' src='https://img.icons8.com/fluency/2x/facebook-new.png'/></a>
                <a href='/'><img alt='Some Text' src='https://img.icons8.com/color/2x/twitter.png'/></a>
                <a href='/'><img alt='Some Text' src='https://img.icons8.com/color/2x/instagram-new.png'/></a>
                <a href='/'><img alt='Some Text' src='https://img.icons8.com/fluency/2x/twitch.png'/></a>
                <a href='/'><img alt='Some Text' src='https://img.icons8.com/fluency/2x/youtube-play.png'/></a>
            </div>
            <div className='links'>
                <a href='/'>Jobs</a>
                <a href='/'>Get the IMDb App</a>
                <a href='/'>Help</a>
                <a href='/'>Conditions of Use</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>Box Office Mojo</a>
            </div>
        </div>
    )
}

export default Footer
