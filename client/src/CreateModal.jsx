import { useState } from 'react'; 
import './CreateModal.css'

const CreateModal = ( { setVisibility, createNew } ) => {
    const { style, setStyle } = setVisibility;
    const { createdNew, setCreatedNew } = createNew;

    const handleExit = () => {
        setStyle({display: "none"});
    }

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("Celebration");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { title, author, category }
        setStyle({display: "none"});

        formData.gif_path = "";
        console.log("try");

        try {
            const response = await fetch (`http://localhost:3000/boards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            // const json = await response.json();
            console.log('Success');
        } catch (error) {
            console.error('Error', error);
        } 
        finally {
            console.log("hLELLOO");
            // setCreatedNew(prev => !prev);
            // console.log(createdNew);
        }
    }

    return (
        <div className="modal" style={style}>
            <div className="modal-content">
                <span onClick={handleExit}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/></label> <br />
                    <label>Author: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/></label> <br />
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