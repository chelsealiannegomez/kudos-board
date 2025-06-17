import { useState } from 'react'
import Home from './Home'
import Board from './Board'
import './App.css'

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [boardID, setBoardID] = useState(-1);

  const home = {
    isHome : isHome,
    setIsHome : setIsHome
  }

  const handleBoard = () => {
    setIsHome(false);
  }

  const selectedBoard = {
      boardID: boardID,
      setBoardID: setBoardID
  }

  return (
    <div className="body">
      {isHome ? <Home home={home} selectedBoard={selectedBoard}/> : <Board home={home} selectedBoard={selectedBoard}/>}
    </div>
  )
}

export default App
