import { useState, useEffect } from 'react';
import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { selectedBoard, boards } ) => {
    const {boardID, setBoardID} = selectedBoard;

    const handleSelect = () => {
        setBoardID(1);
        console.log("selected")
    }

    console.log(boards);

    return (
        <div className="display-boards">
            {
                boards.map(board => (
                    <BoardCard key={board.id} prop={board} handleSelect={handleSelect}/>  
                ))
            }
        </div>
    )
}

export default DisplayBoards