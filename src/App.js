import './style.css'
import Die from './components/Die';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const isHeldArray = dice.filter(die => die.isHeld === true)
    const firstDieHeld = dice.find(die => die.isHeld === true)
    let equalValuesArray = []
    if(firstDieHeld){
      equalValuesArray = dice.filter(die => die.value === firstDieHeld.value && die.isHeld === true)
    }
    if(isHeldArray.length === 10 && equalValuesArray.length === 10){
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
          die :
          generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(dice.map(die =>
      die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die)
    )
  }

  function startNewGame() {
    setDice(allNewDice)
    setTenzies(false)
  }

  return (
    <main>
      <div className="frame">
      {tenzies && <Confetti/>}
        <div className='board'>
          <h1 className='title'>Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {dice.map((object) => {
              return(
              <Die
                key={object.id}
                value={object.value}
                isHeld={object.isHeld}
                id={object.id}
                holdDice={holdDice}
              />
              )
            })}
          </div>
          <button className='roll-dice-btn' onClick={tenzies ?
          startNewGame :
          rollDice}> {tenzies ? "New Game" : "Roll"}</button>
        </div>
      </div>
    </main>
  )
}

export default App;
