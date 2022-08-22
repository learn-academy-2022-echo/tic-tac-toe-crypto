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

  const checkWinner = (index) => {
   const winCon = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]
   for(index = 0; index < winCon.length; index++){
    const [a,b,c] = winCon[index]
   if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
   return alert(`${squares[a]} Win`) 
  }
}
}
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'> 
      
      {squares.map((value, index) => {
        
        return (<Square value={value} index={index} 
        handleGame={handleGame}
       checkWinner={checkWinner}/>)
      }
    )}   
      </div >
      <br></br>
      <div className="button">
      <button type="button" onClick={null}>Restart Game</button>
      </div>
    </>
  )
}

export default App