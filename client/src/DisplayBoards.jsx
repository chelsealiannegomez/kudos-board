import BoardCard from './BoardCard';
import './DisplayBoards.css'

const DisplayBoards = ( { selectBoard } ) => {
    const {selectedBoard, setSelectedBoard} = selectBoard;

    const prop = {
        cover_image : "https://i.pinimg.com/1200x/c9/13/bd/c913bdf34a2f70e1709deed4fadf2fa2.jpg",
        title : "Board",
        category: "Thank you",
    }

    const handleSelect = () => {
        setSelectedBoard(1);
        console.log("selected")
    }

    return (
        <div className="display-boards">
            <BoardCard prop={prop} handleSelect={handleSelect}/>
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop}/>
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
            <BoardCard prop={prop} />
        </div>
    )
}

export default DisplayBoards