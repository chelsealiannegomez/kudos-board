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

    async function fetchSearchGifs() {
        const { data: gifs } = await gf.search(submittedQuery, { sort: 'relevant', lang: 'es', limit: 12, type: 'gifs' })
        return gifs
    }
    
    // useEffect(() => {
    //     fetchSearchGifs().then (response => {
    //         setGifs(response);
    //         console.log(response);
    //     })
    //     // console.log(setGifs);
    // }, [query]);

    // const handleSelect = () => {
    //     setGifUrl()
    // }

    const handleSearch = () => {
        setSubmittedQuery(query);
        fetchSearchGifs().then (response => {
            setGifs(response);
            console.log(response);
        })
    }

    return (
        <div style={{margin: 'auto', width: '100%'}}>
            <input type="text" onChange={onSearchChange} />
            <div onClick={handleSearch}>Search</div>
            
            <div className="gif-container">
            {
                gifs.map((gif) => {
                    return (
                        // <p key={gif.id}>Hello{gif.alt}</p>
                        <img key={gif.id} src={gif.images.original.url} onClick={() => setGifUrl(gif.images.original.url)} className="gif"/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default GifComponent;