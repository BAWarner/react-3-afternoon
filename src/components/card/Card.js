import React from 'react';
import CardNav from './CardNav';

var Card = (props) => {
    let employeeIndex = props.employeeIndex;
    let person =  props.employeeList[employeeIndex];
    let favoriteMovies = person.favoriteMovies.map(
        (val, i) => {
            return <li key={i}>{val}</li>
        }
    );
    return(
    <div className='card-wrap flex justify-center align-center'>
        <div className='card bg-white'>
            <span className='card-counter'> {+employeeIndex + 1} / {props.employeeList.length}</span>
            <h1 className='card-title'>{person.name.first} {person.name.last}</h1>

            <div>
                <span className='card-detail'><span>From:</span> {person.city}, {person.country}</span>
                <span className='card-detail'><span>Job Title:</span> {person.title}</span>
                <span className='card-detail'><span>Employer:</span> {person.employer}</span>
                <span className='card-detail mrg-top'><span>Favorite Movies:</span></span>
                <ol className='card-ol'>
                    {favoriteMovies}
                </ol>
            </div>
        </div>
        <CardNav
            previousCard={props.previousCard}
            nextCard={props.nextCard}
            deleteCard={props.deleteCard}
        />
    </div>
    );
}

export default Card;