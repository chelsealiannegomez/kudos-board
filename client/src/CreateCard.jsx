import { useState } from 'react'; 
import GifComponent from './GifComponent';
import './CreateModal.css';

const CreateCard = ( { setVisibility, boardID, setCards, upvoteChange } ) => {
    const { style, setStyle } = setVisibility;
    const { upvote, setUpvote } = upvoteChange;

    const handleExit = () => {
        setStyle({display: "none"});
    }

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [gifUrl, setGifUrl] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { title, author, message };

        formData.upvotes = 0;
        formData.pinned = false;
        formData.gif_path = gifUrl;

        setStyle({display: "none"});
        console.log('boardId', boardID)
        try {
            
            const response = await fetch (`https://kudos-board-clh3.onrender.com/boards/${boardID}}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            const json = await response.json();
            setCards(json);
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setUpvote(prev => !prev);
        }
    }
    
    return (
        <div className="modal" style={style}>
            <div className="modal-content">
                <span onClick={handleExit}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" value={title} placeholder="" onChange={(e) => setTitle(e.target.value)} required/></label> <br />
                    <label>Message: <input type="text" value={author} placeholder="" onChange={(e) => setAuthor(e.target.value)} required/></label> <br />
                    <label>Author: <input type="text" value={message}placeholder="" onChange={(e) => setMessage(e.target.value)}/></label> <br />
                    <GifComponent setGifUrl={setGifUrl}/>
                    <label>GIF Image Address: <input type="text" value={gifUrl} readOnly></input></label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCard;