import { useState } from 'react';
import CreateModal from "./CreateModal";
import './NewBoard.css'

const NewBoard = ( { changes } ) => {

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
            <CreateModal setVisibility={setVisibility} changes={changes}/>
        </div>
    )
}

export default NewBoard;