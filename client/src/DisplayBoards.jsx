import { useState, useEffect } from 'react';
import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { sort, selectedBoard, boards, changes, submittedQuery } ) => {
    const {boardID, setBoardID} = selectedBoard;
    const [filteredBoards, setFilteredBoards] = useState([...boards]);

    useEffect(() => {
        console.log("sort", sort);
        if (sort === "thank-you") {
            const newBoard = boards.filter(obj => obj.category === "Thank you");
            setFilteredBoards(newBoard);
        }
        else if (sort === "celebration") {
            const newBoard = boards.filter(obj => obj.category === "Celebration");
            setFilteredBoards(newBoard);
        }
        else if (sort === "inspiration") {
            const newBoard = boards.filter(obj => obj.category === "Inspiration");
            setFilteredBoards(newBoard);
        }
        else {
            setFilteredBoards([...boards]);
        }
    }, [sort, boards]);

    useEffect(() => {
        if (submittedQuery !== "") {
            const searchTerm = submittedQuery.toLowerCase();
            const filteredObjects = boards.filter(obj => obj.title.toLowerCase().includes(searchTerm));
            setFilteredBoards(filteredObjects);
        }
        else {
            setFilteredBoards([...boards]);
        }
    }, [submittedQuery]);

    
    return (
        <div className="display-boards">
            {filteredBoards.length === 0 ? <p>No boards to display</p> : 
            (
                filteredBoards.map(board => (
                    <BoardCard key={board.id} prop={board} handleSelect={() => setBoardID(board.id)} boards={boards} changes={changes}/>  
                ))
            )}
        </div>
    )
}

export default DisplayBoards