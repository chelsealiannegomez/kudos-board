import './Card.css'

const Card = ( { prop, upvoteChange } ) => {
    const {upvote, setUpvote} = upvoteChange;

    const handleUpvote = async function() {
        try {
            const response = await fetch (`http://localhost:3000/cards/${prop.id}/upvote`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            })
            const json = await response.json();
            setUpvote(!upvote);
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            // setIsChange(prev => !prev);
        }
    }

    return (
        <div className="card">
            <img src={prop.gif_path} />
            <h1>{prop.title}</h1>
            <p>{prop.message}</p>
            <h2>{prop.author}</h2>
            <button>Delete</button>
            {prop.upvotes}<button onClick={handleUpvote}>Upvote</button>
        </div>
    )
}

export default Card;