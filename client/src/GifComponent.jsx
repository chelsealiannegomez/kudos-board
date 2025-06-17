import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api'


const GifComponent = () => {
    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_SDK_KEY);
    const fetchGifs = (offset) => gf.search("birthday", { offset, limit: 2});
    return (
        <div style={{margin: 'auto', width: 800}}>
            <Grid width={800} columns={3} fetchGifs={fetchGifs} />
        </div>
    )
}

export default GifComponent;