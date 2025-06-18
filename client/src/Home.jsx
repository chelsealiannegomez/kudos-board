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

const Home = ( { home, selectedBoard } ) => {
    const [boards, setBoards] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const {boardID, setBoardID} = selectedBoard;

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

    // const selectedBoard = {
    //     boardID: boardID,
    //     setBoardID: setBoardID
    // }

    const changes = {
        isChange: isChange,
        setIsChange: setIsChange
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
        fetchBoards().then(data => {
            setBoards(data);
        })
    }, [isChange])


    useEffect(() => {
        console.log("sort mode", sort);
    }, [sort])
    
    return (
        <div className="app">
            <header>
                kudos board &nbsp; 🙌
            </header>

            <SearchBar query={query}/>

            <SortOptions sortMode={sortMode}/>

            <NewBoard changes={changes}/>

            <DisplayBoards sort={sort} selectedBoard={selectedBoard} boards={boards} changes={changes} submittedQuery={submittedQuery}/>
        </div>
    )
}

export default Home;