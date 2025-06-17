import './SortOptions.css'

const SortOptions = ( {sortMode} ) => {
    const { sort, setSort } = sortMode;

    const handleClick = (e) => {
        setSort(e.target.value);
    }

    return (
        <div className="sort-options">
            <button value="recent" onClick={handleClick}>Recent</button>
            <button value="celebration" onClick={handleClick}>Celebration</button>
            <button value="thank-you" onClick={handleClick}>Thank you</button>
            <button value="inspiration" onClick={handleClick}>Inspiration</button>
        </div>
    )
}
export default SortOptions;