import { useState, useEffect } from 'react';
import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { selectedBoard, boards } ) => {
    // const [data, setData] = useState([]);

    // const fetchBoards = async function() {
    //     try {
    //         const response = await fetch('http://localhost:3000/boards', {
    //             method: "GET",
    //         })
    //         if (!response.ok) {
    //             throw new Error(`Response status: ${response.status}`)
    //         }

    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // } 

    const {boardID, setBoardID} = selectedBoard;

    const handleSelect = () => {
        setBoardID(1);
        console.log("selected")
    }


    const prop = {
        cover_image : "https://i.pinimg.com/1200x/c9/13/bd/c913bdf34a2f70e1709deed4fadf2fa2.jpg",
        title : "Board",
        category: "Thank you",
    }

    console.log(boards);

    return (
        <div className="display-boards">
            {/* <BoardCard prop={prop} handleSelect={handleSelect}/>
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop}/>
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop} /> */}
            {
                boards.map(board => (
                    <BoardCard key={board.id} prop={board} handleSelect={handleSelect}/>
                
                ))
            }
        </div>
    )
}

export default DisplayBoards