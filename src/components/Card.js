import React from 'react';

const Card = ({id,name}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='pokemon' src={`${process.env.PUBLIC_URL}/sprites/${id}.png`}/>
            <div>
                <h2>{id}</h2>
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
            </div>
        </div>
    );
}

export default Card;