import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>NotesApp</h1>
      <h1> {count} </h1>
      <div className="card">
        <button id="counter" onClick={() => setCount((count) => count + 1)}>
          Count
        </button>
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
