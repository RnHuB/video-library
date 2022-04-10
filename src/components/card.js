import React from 'react';
import './card.css'
import videodata from './videodata';

const Card = ()=> {
    return(
        <>
        <div className='videocard-container'>
        {videodata.map((item)=> 
            <div className='card-container'>
            <div className='thumbnail'>
                <img className='thumbnail' src={item.img}/>
            </div>
            <div className='description'>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            </div>
        </div>
        )}     
        </div>
        </>
    )
}

export default Card;