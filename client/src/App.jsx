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

  const [isLight, setIsLight] = useState(false);

  const toggleLight = () => {
    setIsLight(!isLight);
  }

  return (
    <div className={isLight ? "invert" : ""}>
      <button className="toggle-mode" onClick={toggleLight}>{isLight ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
      {isHome ? <Home home={home} selectedBoard={selectedBoard}/> : <Board home={home} selectedBoard={selectedBoard}/>}
      <footer>
       © Chelsea Lianne Gomez | 2025
      </footer>
    </div>
  )
}

export default App
