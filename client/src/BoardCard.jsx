import './BoardCard.css'

const BoardCard = ( { handleSelect, prop, changes } ) => {
    const { isChange, setIsChange } = changes;

    const handleDelete = async (e) => {
        e.preventDefault();        
        try {
            const response = await fetch (`https://kudos-board-clh3.onrender.com/${prop.id}`, {
                method: 'DELETE',
            })
            const json = await response.json();
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        }
        finally {
            setIsChange(prev => !prev);
        }
    }

    return (
        <div className="board-card">
            <img src={prop.gif_path} />
            <h1>{prop.title}</h1>
            <h2>{prop.category}</h2>
            <p>{prop.author}</p>
            <button onClick={handleDelete}>Delete Board</button>
            <button onClick={handleSelect}>View Board</button>
        </div>
    )
}

export default BoardCard;