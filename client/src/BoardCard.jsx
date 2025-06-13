import './BoardCard.css'

const BoardCard = ( { handleSelect, prop } ) => {
    return (
        <div className="board-card" onClick={handleSelect}>
            <img src={prop.cover_image} />
            <h1>{prop.title}</h1>
            <p>{prop.category}</p>
        </div>
    )
}

export default BoardCard;