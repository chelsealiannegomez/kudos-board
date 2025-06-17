import { useState, useEffect } from 'react';
import Card from './Card';
import './DisplayCards.css';

const DisplayCards = ( { cards } ) => {
    
    return (
        <div className="display-cards">
            {
                cards.map(card => (
                    <Card key={card.id} prop={card} /> 
                ))
            }

        </div>
    )
}

export default DisplayCards;