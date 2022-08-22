import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [players, setPlayers] = useState(0)
  

  const handleGame = (index) => {
    if(players === 0 && squares[index] === null) {
      let newSquares = [...squares]
      newSquares[index] = "X"
      setSquares(newSquares)
      setPlayers(1)
    }else if (players === 1 && squares[index] === null){
      let newSquares = [...squares]
      newSquares[index] = "O"
      setSquares(newSquares)
      setPlayers(0)
    }
  }

  
  
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'> 
      
      {squares.map((value, index) => {
        
        return (<Square value={value} index={index} 
        handleGame={handleGame}
        />)
      }
    )}   
      </div>

      <button type="button" onClick={null}>Restart Game</button>
    </>
  )
}

export default App