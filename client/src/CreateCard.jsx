import { useState } from 'react'; 
import './CreateModal.css';

const CreateCard = ( { setVisibility, changes } ) => {
    const { style, setStyle } = setVisibility;
    // const { isChange, setIsChange } = changes;

    const handleExit = () => {
        setStyle({display: "none"});
    }

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [gifUrl, setGifUrl] = useState("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjM4eDVzd283ZDgyM3YwNXZkM3JicTlsbXQxNXV5Z29wa2RtbXM2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/peUx0SaUCRlBriP84y/giphy.gif")



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { title, author, category };

        formData.upvotes = 0;
        formData.pinned = false;

        setStyle({display: "none"});
        
        try {
            
            const response = await fetch (`http://localhost:3000/boards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            const json = await response.json();
            console.log('Success', json);
        } catch (error) {
            console.error('Error', error);
        } finally {
            setIsChange(prev => !prev);
        }
    }
    
    return (
        <div className="modal" style={style}>
            <div className="modal-content">
                <span onClick={handleExit}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/></label> <br />
                    <label>Message: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/></label> <br />
                    <label>Author: <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/></label> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCard;