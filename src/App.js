import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGame = (e) => {
    setSquares(e.target.value)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'> 
      {squares.map((value, index) => {
        return (<Square value={value} index={index} 
        handleGame= {handleGame}/>)
      })}

        



      </div>
    </>
  )
}

export default App