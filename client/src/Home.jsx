import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions'
import NewBoard from './NewBoard'
import DisplayBoards from './DisplayBoards';
import './Home.css'

const Home = ( { home } ) => {

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
    const [selectedBoard, setSelectedBoard] = useState(-1);

    const selectBoard = {
        selectedBoard: selectedBoard,
        setSelectedBoard: setSelectedBoard
    }

    useEffect (() => {
        if (selectedBoard === -1) {
            home.setIsHome(true);
        }
        else {
            home.setIsHome(false);
        }
    }, [selectedBoard])

    return (
        // <div onClick={handleBoard}>Open</div>
        <div className="app">
            <header>
                Kudos Board
            </header>

            <SearchBar query={query}/>

            <SortOptions sortMode={sortMode}/>

            <NewBoard/>

            <DisplayBoards sort={sort} selectBoard={selectBoard} />
        </div>
    )
}

export default Home;