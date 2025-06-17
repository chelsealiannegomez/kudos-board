import { useState, useEffect } from 'react';
import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { sort, selectedBoard, boards, changes } ) => {
    const {boardID, setBoardID} = selectedBoard;
    const initial = [...boards];
    const [filteredBoards, setFilteredBoards] = useState(initial);

    useEffect(() => {
        console.log("sort", sort);
        if (sort === "thank-you") {
            console.log("thanks")
            const newBoard = boards.filter(obj => obj.category === "Thank you");
            setFilteredBoards(newBoard);
        }
        else {
            setFilteredBoards(initial);
        }
    }, [sort, boards]);

    
    return (
        <div className="display-boards">
            {
                filteredBoards.map(board => (
                    <BoardCard key={board.id} prop={board} handleSelect={() => setBoardID(board.id)} boards={boards} changes={changes}/>  
                ))
            }
        </div>
    )
}

export default DisplayBoards