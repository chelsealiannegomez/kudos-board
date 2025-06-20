import { useState, useEffect } from 'react';
import DisplayCards from './DisplayCards';
import NewCard from './NewCard';
import './Board.css'

async function fetchCards(id) {
    try {
        const response = await fetch(`https://kudos-board-clh3.onrender.com/${id}/cards`, {
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

async function fetchBoard(id) {
    try {
        const response = await fetch(`https://kudos-board-clh3.onrender.com/boards/${id}`, {
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
    const [upvote, setUpvote] = useState(false);
    const [title, setTitle] = useState("");

    const upvoteChange = {
        upvote: upvote,
        setUpvote: setUpvote
    }

    const onBack = () => {
        home.setIsHome(true);
        setBoardID(-1);
    }

    useEffect(()=> {
        fetchCards(boardID).then(data => {
            setCards(data);
        })
    }, [upvote])

    useEffect(()=> {
        fetchBoard(boardID).then(data => {
            setTitle(data.title);
        })
    }, [selectedBoard])

    return (
        <div>
            <div onClick={onBack} className="back">Back</div>
            <header>{title}</header>
            
            <NewCard boardID={boardID} setCards={setCards} upvoteChange={upvoteChange}/>

            <DisplayCards cards={cards} upvoteChange={upvoteChange}/>
        </div>
    )
}

export default Board;