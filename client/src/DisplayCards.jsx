import { useState, useEffect } from 'react';
import Card from './Card';
import './DisplayCards.css';

const DisplayCards = ( { cards, upvoteChange } ) => {
    const [sortedCards, setSortedCards] = useState([]);

    useEffect(() => {
        if (!Array.isArray(cards)) return;
        const sortedCards = [...cards].sort(function (x,y) {
            const xPinned = (x.pinned ? 1 : 0);
            const yPinned = (y.pinned ? 1 : 0);
            if (yPinned !== xPinned) return (yPinned-xPinned);

            if (x.pinned && y.pinned) {
                const xTime = new Date(x.pinnedTime).getTime();
                const yTime = new Date(y.pinnedTime).getTime();
                return yTime - xTime;
            }            
            return (x.id-y.id);
        })
        setSortedCards(sortedCards);
        console.log(sortedCards);
    
    }, [cards])

    return (
        <div className="display-cards">
            {
                sortedCards.map(card => (
                    <Card key={card.id} prop={card} upvoteChange={upvoteChange} /> 
                ))
            }
        </div>
    )
}

export default DisplayCards;