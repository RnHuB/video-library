import React from 'react';
import './header.css'
import headerLogo from '../images/logo.png'
import SearchLogo from '../images/searchlogo.png'
import FbIcon from '../images/fbicon.png'
import InstaIcon from '../images/instaicon.png'
import TwitterIcon from '../images/twitter.png'
import LinkedInIcon from '../images/linkedinicon.png'


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='headerLogo'>
                    <img src={headerLogo}/>
                </div>
                <div className='searchBox'>
                    <input type='search' placeholder='Search'></input>
                    <img className='search-logo' src={SearchLogo} />
                </div>
                <div className='socialContact'>
                    <img src={FbIcon} alt='noImage' />
                    <img src={InstaIcon} alt='noImage' />
                    <img src={TwitterIcon} alt='noImage' />
                    <img src={LinkedInIcon} alt='noImage' />
                </div>
            </div>
        </>
    )
}

export default Header;