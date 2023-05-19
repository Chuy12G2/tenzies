import './style.css'
import Die from './components/Die';
import { useState } from 'react';

function App() {

  function allNewDice() {
    const numbers = []
    for(let i = 0; i < 10; i++){
      numbers.push(Math.ceil(Math.random() * 6))
    }
    return numbers
  }

  function rollDice() {
    setDiceValues(allNewDice())
  }

  const [diceValues, setDiceValues] = useState(allNewDice())

  return (
    <main>
      <div className="frame">
        <div className='board'>
          <div className='dice-container'>
            {diceValues.map((number) => {
              return <Die value={number}/>
            })}
          </div>
          <button className='roll-dice-btn' onClick={rollDice}>Roll</button>
        </div>
      </div>
    </main>
  )
}

export default App;
