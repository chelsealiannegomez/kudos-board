import { useState } from 'react';
import CreateModal from "./CreateModal";
import './NewBoard.css'

const CreateNew = ( { createNew } ) => {

    const handleClick = () => {
        setStyle({display: "flex"});
    }

    // Set style of modal
    const [style, setStyle] = useState({display: "none"});

    const setVisibility = {
        style : style,
        setStyle : setStyle
    }

    return (
        <div className="create">
            <button onClick={handleClick}>Create New</button>
            <CreateModal setVisibility={setVisibility} createNew={createNew}/>
        </div>
    )
}

export default CreateNew;