import './Card.css'

const Card = ( { prop } ) => {
    return (
        <div className="card">
            <img src={prop.gif_path} />
            <h1>{prop.title}</h1>
            <p>{prop.message}</p>
            <h2>{prop.author}</h2>
            <button>Delete</button>
            <button>Upvote</button>
        </div>
    )
}

export default Card;