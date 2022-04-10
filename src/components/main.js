import React from 'react';
import SideBar from './sideBar';
import Card from './card.js'
import './main.css'


const Main = ()=> {
    return(
        <>
        <div className='main'>
        <div className='sidebar'>
        <SideBar />
        </div>
        <div className='card'>
        <Card />
        </div>
        </div>
        </>
    )
}

export default Main;