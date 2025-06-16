import './BoardCard.css'

const BoardCard = ( { handleSelect, prop } ) => {
    console.log("Board loaded");
    return (
        <div className="board-card" onClick={handleSelect}>
            <img src={prop.gif_path} />
            <h1>{prop.title}</h1>
            <p>{prop.category}</p>
        </div>
    )
}

export default BoardCard;