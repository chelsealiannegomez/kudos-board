import { useState, useEffect } from 'react';
import Card from './Card';
import './DisplayCards.css';

const DisplayCards = ( { cards } ) => {
    const [upvote, setUpvote] = useState(false);

    const upvoteChange = {
        upvote: upvote,
        setUpvote: setUpvote
    }

    useEffect(() => {
        console.log(upvote);
    }, [upvote])

    return (
        <div className="display-cards">
            {
                cards.map(card => (
                    <Card key={card.id} prop={card} upvoteChange={upvoteChange} /> 
                ))
            }

        </div>
    )
}

export default DisplayCards;