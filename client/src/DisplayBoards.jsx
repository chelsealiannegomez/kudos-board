import { useState, useEffect } from 'react';
import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { selectedBoard, boards, changes } ) => {
    const {boardID, setBoardID} = selectedBoard;
    
    return (
        <div className="display-boards">
            {
                boards.map(board => (
                    <BoardCard key={board.id} prop={board} handleSelect={() => setBoardID(board.id)} boards={boards} changes={changes}/>  
                ))
            }
        </div>
    )
}

export default DisplayBoards