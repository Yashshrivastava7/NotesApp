import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  let title = "";
  let note = "";
  return (
    <div className="App">
      <h1>NotesApp</h1>
      <div className="card">
        <textarea rows="1" cols="50" placeholder="Title"></textarea>
        <br />
        <textarea rows="10" cols="50" placeholder="Write a note..."></textarea>
        <br />
        <button className="add">Add Note</button>
      </div>
    </div>
  );
}

export default App;
