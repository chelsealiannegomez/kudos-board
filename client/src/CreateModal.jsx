import { useState } from 'react'; 
import './CreateModal.css'

const CreateModal = ( { setVisibility, changes } ) => {
    const { style, setStyle } = setVisibility;
    const { isChange, setIsChange } = changes;

    const handleExit = () => {
        setStyle({display: "none"});
    }

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("Celebration");
    const [gifUrl, setGifUrl] = useState("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjM4eDVzd283ZDgyM3YwNXZkM3JicTlsbXQxNXV5Z29wa2RtbXM2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/peUx0SaUCRlBriP84y/giphy.gif")

    const rand = Math.floor(Math.random() * (101));

    const fetchGifs = async function() {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${category}&limit=1&offset=${rand}&rating=g&lang=en&bundle=messaging_non_clips`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { title, author, category };
        setStyle({display: "none"});
        
        try {
            const data = await fetchGifs();
            setGifUrl(data.data[0].images.original.url);
            formData.gif_path = data.data[0].images.original.url;

            const response = await fetch (`https://kudos-board-clh3.onrender.com/boards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            setTitle("");
            setAuthor("");
            setCategory("Celebration");
            setGifUrl("");
            const json = await response.json();
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setIsChange(prev => !prev);
            setTitle("");
            setAuthor("");
            setCategory("Celebration");
            setGifUrl("");
        }
    }
    
    return (
        <div className="modal" style={style}>
            <div className="modal-content">
                <span onClick={handleExit}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" value={title} placeholder="" onChange={(e) => setTitle(e.target.value)}/></label> <br />
                    <label>Author: <input type="text" value={author} placeholder="" onChange={(e) => setAuthor(e.target.value)}/></label> <br />
                    <label>Category:
                        <select value={category} onChange={e => setCategory(e.target.value)} required>
                            <option value="Celebration">Celebration</option>
                            <option value="Inspiration">Inspiration</option>
                            <option value="Thank you">Thank you</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateModal;