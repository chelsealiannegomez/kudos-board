import { useState, useEffect } from 'react';
import './ViewCard.css'

async function fetchComments(id) {
    try {
        const response = await fetch(`https://kudos-board-clh3.onrender.com/card/${id}/comments`, {
            method: "GET",
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

const ViewCard = ( {prop, setVisibility} ) => {
    const { style, setStyle } = setVisibility;
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [addComment, setAddComment] = useState(false);


    const handleExit = () => {
        setStyle({display: "none"});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { author, message };
        console.log(formData);

        // setStyle({display: "none"});
        try {
            
            const response = await fetch (`https://kudos-board-clh3.onrender.com/card/${prop.id}/comment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                const newComment = await response.json(); 
                setComments(prev => [...prev, newComment]);
            }
        } catch (error) {
            console.error('Error', error);
        } finally {
            setAddComment(prev => !prev);
            setAuthor("");
            setMessage("");
        }
    }

    useEffect(()=> {
        fetchComments(prop.id).then(data => {
            setComments(data);
            console.log(data);
        })
    }, [setAddComment])

    return (
        <div style={style} className="card-modal">
            <div className="card-modal-content">
                <span onClick={handleExit}>&times;</span><br />
                <div className="description">
                    <img src={prop.gif_path} />
                    <div className="text-content">
                        <h1>{prop.title}</h1>
                        <h2>{prop.author}</h2>
                        <p>{prop.message}</p>
                    </div>
                    
                </div>
                
                <p><b>Comments:</b></p>
                <div>{comments && comments.length !== 0 ? 
                    (
                        comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <h3>{comment.author}</h3>
                                <p>{comment.message}</p>
                            </div>
                        ))
                    ) : <p>Be the first comment!</p>}
                </div>
                <p><b>Add a comment</b></p>
                <form onSubmit={handleSubmit}>
                    <label>Author: <input type="text" value={author} placeholder="" onChange={(e) => setAuthor(e.target.value)} /></label> <br />
                    {/* <label>Message: <input type="textarea" value={message} placeholder="" onChange={(e) => setMessage(e.target.value)} required/></label> <br /> */}
                    <label>Message: <br /><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={40} required></textarea></label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ViewCard