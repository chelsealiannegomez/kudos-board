import { useState, useEffect } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import './GifComponent.css';

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_SDK_KEY);

const GifComponent = ( {setGifUrl} ) => {
    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
    const [gifs, setGifs] = useState([]);

    const onSearchChange = (e) => {
        setQuery(e.target.value);
        console.log(e.target.value);
    }

    async function fetchSearchGifs(query) {
        const { data: gifs } = await gf.search(query, { sort: 'relevant', lang: 'es', limit: 12, type: 'gifs' })
        return gifs
    }

    const handleSearch = () => {
        console.log("query", query);
        setSubmittedQuery(query);
        fetchSearchGifs(query).then (response => {
            setGifs(response);
            console.log(response);
        })
        setSubmittedQuery("");
    }

    return (
        <div style={{margin: 'auto', width: '100%'}}>
            <div className="container">
                <p>Search for GIFs:&nbsp;</p>
                <input type="text" onChange={onSearchChange} className="gif-search"/>
                <div onClick={handleSearch}>Search</div>
            </div><br />
            
            <div className="gif-container">
            {
                gifs.map((gif) => {
                    return (
                        <img key={gif.id} src={gif.images.original.url} onClick={() => setGifUrl(gif.images.original.url)} className="gif"/>                        
                    )
                })
            }
            </div>
        </div>
    )
}

export default GifComponent;