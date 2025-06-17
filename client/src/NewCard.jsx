import { useState } from 'react';
import CreateCard from "./CreateCard";
import './NewBoard.css'

const NewCard = ( {  } ) => {

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
            <CreateCard setVisibility={setVisibility}/>
        </div>
    )
}

export default NewCard;