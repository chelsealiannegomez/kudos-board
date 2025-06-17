import { useState } from 'react';
import CreateCard from "./CreateCard";
import './NewBoard.css'

const NewCard = ( { boardID, setCards } ) => {

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
            <CreateCard setVisibility={setVisibility} boardID={boardID} setCards={setCards}/>
        </div>
    )
}

export default NewCard;