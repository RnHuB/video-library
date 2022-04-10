import React from 'react';
import './sidebar.css'

const SideBar = ()=> {
    return(
        <>
            <div className='list'>
                <ul>
                    <li>Playlist</li>
                    <li>Recent</li>
                    <li>History</li>
                    <li>Liked</li>
                    <li>Saved</li>
                    <li>More</li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;