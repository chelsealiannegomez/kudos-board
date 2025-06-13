import { useState } from 'react';
import './SearchBar.css'

const SearchBar = ( {query} ) => {
    const { submitedQuery, setSubmittedQuery } = query
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        setSubmittedQuery(searchQuery);
    }
    const clearInput = (event) => {
        event.preventDefault();
        setSubmittedQuery("");
        setSearchQuery("");
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={searchQuery} placeholder="Search" onChange={(event) => setSearchQuery(event.target.value)} className="search-bar"/>
            <button type="submit">Search</button>
            <button type="button" onClick={clearInput}>Clear</button>
        </form>
    )
}
export default SearchBar