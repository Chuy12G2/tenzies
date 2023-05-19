import './style.css'
import Die from './components/Die';

function App() {

  function allNewDice() {
    const numbers = []
    for(let i = 0; i < 10; i++){
      numbers.push(Math.ceil(Math.random() * 6))
    }
    return numbers
  }

  return (
    <main>
      <div className="frame">
        <div className='board'>
          <div className='dice-container'>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
