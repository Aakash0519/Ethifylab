import React from 'react';
import bulb from './bulb.png';

function Card({title,heading,image}) {
    
    return (
        <div className="singleCard">
            <div className="cardImage">
                <div className="shadowBox">
                    <img src={image}/></div></div>
            <br/><br/>
            <div className="cardHeading" >{heading}</div>
            <p className="cardTitle">{title}</p>
        </div>
    );
}

export default Card;

