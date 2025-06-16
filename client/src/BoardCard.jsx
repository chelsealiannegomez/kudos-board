import { useState, useEffect } from 'react';
import './BoardCard.css'

const BoardCard = ( { handleSelect, prop } ) => {

    const fetchGifs = async function() {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${prop.category}&limit=1&offset=${prop.id}&rating=g&lang=en&bundle=messaging_non_clips`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    } 

    const postToDB = async function(data) {
        try {
            const response = await fetch (`http://localhost:3000/boards/${prop.id}/gif-path`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"gif_path": data}),
            })
            const json = await response.json()
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(()=> {
        if (prop.gif_path === "") {
            fetchGifs().then(data => {
                postToDB(data.data[0].images.original.url);
            })
            
        }
    }, [prop])

    return (
        <div className="board-card" onClick={handleSelect}>
            <img src={prop.gif_path} />
            <h1>{prop.title}</h1>
            <h2>{prop.category}</h2>
            <p>{prop.author}</p>
        </div>
    )
}

export default BoardCard;