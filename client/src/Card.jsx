import { useState } from 'react';
import ViewCard from './ViewCard';
import './Card.css'
import trash from './assets/trash.png'


const Card = ( { prop, upvoteChange } ) => {
    const {upvote, setUpvote} = upvoteChange;

    const handleUpvote = async function(e) {
        e.stopPropagation();
        try {
            const response = await fetch (`http://localhost:3000/cards/${prop.id}/upvote`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            })
            const json = await response.json();
            
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setUpvote(prev => !prev);
        }
    }

    const handleDelete = async function(e) {
        e.stopPropagation();
        try {
            const response = await fetch (`http://localhost:3000/card/${prop.id}`, {
                method: 'DELETE',
            })
            const json = await response.json();
            
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setUpvote(prev => !prev);
        }
    }

    const handlePin = async function(e) {
        e.stopPropagation();
        const current = new Date().toISOString();
        try {
            const response = await fetch (`http://localhost:3000/cards/${prop.id}/pin`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({pinnedTime: current, pinned: prop.pinned})
            })
            const json = await response.json();
            console.log("Current", current);
            
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setUpvote(prev => !prev);
        }
    }

    const handleClick = () => {
        setStyle({display: "flex"});
    }

    const [style, setStyle] = useState({display: "none"});

    const setVisibility = {
        style : style,
        setStyle : setStyle
    }

    return (
        <>
            <div className="card" onClick={handleClick}>
                <img src={prop.gif_path} />
                <h1>{prop.title}</h1>
                <p>{prop.message}</p>
                <h2>{prop.author}</h2>
                <img src={trash} className="trash-icon" onClick={handleDelete}/>
                {prop.upvotes}<button onClick={handleUpvote}>Upvote</button>
                <button onClick={handlePin} className={prop.pinned ? "pinned" : ""}>{prop.pinned ? "Pinned" : "Pin"}</button>
            </div>
            <ViewCard prop={prop} setVisibility={setVisibility}/>
        </>
        
    )
}

export default Card;