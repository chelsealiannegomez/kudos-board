import './SortOptions.css'

const SortOptions = ( {sortMode} ) => {
    const { sort, setSort } = sortMode;

    const handleClick = (e) => {
        setSort(e.target.value);
    }

    return (
        <div className="sort-options">
            <button value="recent" onClick={handleClick} className={sort === 'recent' ? "selected" : ""}>Recent</button>
            <button value="celebration" onClick={handleClick} className={sort === 'celebration' ? "selected" : ""}>Celebration</button>
            <button value="thank-you" onClick={handleClick} className={sort === 'thank-you' ? "selected" : ""}>Thank you</button>
            <button value="inspiration" onClick={handleClick} className={sort === 'inspiration' ? "selected" : ""}>Inspiration</button>
        </div>
    )
}
export default SortOptions;