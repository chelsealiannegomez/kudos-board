import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions'
import NewBoard from './NewBoard'
import DisplayBoards from './DisplayBoards';
import './Home.css'

async function fetchBoards() {
    try {
        const response = await fetch('http://localhost:3000/boards', {
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

const Home = ( { home } ) => {
    const [boards, setBoards] = useState([]);
    const [createdNew, setCreatedNew] = useState(false);

    // Handle Search
    const [submittedQuery, setSubmittedQuery] = useState("");

    const query = {
        submittedQuery: submittedQuery,
        setSubmittedQuery: setSubmittedQuery
    }

    // Handle Sort Mode
    const [sort, setSort] = useState("recent");
    const sortMode = {
        sort: sort,
        setSort: setSort
    }

    // Handle Create New Button
    const [boardID, setBoardID] = useState(-1);

    const selectedBoard = {
        boardID: boardID,
        setBoardID: setBoardID
    }

    const createNew = {
        createdNew: createdNew,
        setCreatedNew: setCreatedNew
    }

    useEffect (() => {
        if (boardID === -1) {
            home.setIsHome(true);
        }
        else {
            home.setIsHome(false);
        }
    }, [boardID])

    useEffect(()=> {
        console.log(createdNew);
        fetchBoards().then(data => {
            setBoards(data);
        })
    }, [createdNew])
    
    return (
        // <div onClick={handleBoard}>Open</div>
        <div className="app">
            <header>
                Kudos Board
            </header>

            <SearchBar query={query}/>

            <SortOptions sortMode={sortMode}/>

            <NewBoard createNew={createNew}/>

            <DisplayBoards sort={sort} selectedBoard={selectedBoard} boards={boards}/>
        </div>
    )
}

export default Home;