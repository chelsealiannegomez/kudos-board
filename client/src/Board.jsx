import { useState, useEffect } from 'react';
import DisplayCards from './DisplayCards';
import NewCard from './NewCard';

async function fetchCards(id) {
    try {
        const response = await fetch(`http://localhost:3000/boards/${id}/cards`, {
            method: "GET",
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

const Board = ( { home, selectedBoard } ) => {
    const {boardID, setBoardID} = selectedBoard;
    const [cards, setCards] = useState([]);

    const onBack = () => {
        home.setIsHome(true);
        setBoardID(-1);
    }

    useEffect(()=> {
        fetchCards(boardID).then(data => {
            setCards(data);
        })
    }, [])

    return (
        <div>
            <div onClick={onBack}>Back</div>
            <header>Board {boardID}</header>
            
            <NewCard />

            <DisplayCards cards={cards}/>
        </div>
    )
}

export default Board;