import React from 'react';

export default function CardNav(props){
    return(
        <div className='card-nav flex justify-between align-center'>
            <span onClick={props.previousCard} className='previous white pointer'>Previous</span>
            <div>
                <button className='bg-blue pointer'>Edit</button>
                <button className='bg-blue pointer' onClick={props.deleteCard}>Delete</button>
                <button className='bg-blue pointer'>New</button>
            </div>
            <span onClick={props.nextCard} className='next white pointer'>Next</span>
        </div>
    );
}