import { useState } from 'react'
import Home from './Home'
import Board from './Board'
import './App.css'

const App = () => {
  const [isHome, setIsHome] = useState(true);

  const home = {
    isHome : isHome,
    setIsHome : setIsHome
  }

  const handleBoard = () => {
    setIsHome(false);
  }

  return (
    <div className="body">
      {isHome ? <Home home={home} /> : <Board home={home}/>}
    </div>
  )
}

export default App
