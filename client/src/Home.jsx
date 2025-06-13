import { useState } from 'react';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions'
import CreateNew from './CreateNew'
import DisplayBoards from './DisplayBoards';
import './Home.css'

const Home = ( { home } ) => {
    const handleBoard = () => {
        home.setIsHome(false);
    }

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
    const [isCreateNew, setIsCreateNew] = useState(false);

    const button = {
        isCreateNew: isCreateNew,
        setIsCreateNew: setIsCreateNew
    }

    return (
        // <div onClick={handleBoard}>Open</div>
        <div className="app">
            <header>
                Kudos Board
            </header>

            <SearchBar query={query}/>

            <SortOptions sortMode={sortMode}/>

            <CreateNew button={button}/>

            <DisplayBoards sort={sort}/>
        </div>
    )
}

export default Home;