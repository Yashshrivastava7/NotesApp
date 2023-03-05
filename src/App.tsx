import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [note , setNote] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);

  const handleNote = (e) => {
    setNote(e.target.value)
  }
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleClick = () => {
    let obj = {
      first : title,
      second : note
    }
    setNotes([...notes, obj]);
  }
  
  return (
    <div className="App">
      <h1>NotesApp</h1>
      <div className="card">
        <textarea rows="1" cols="50" placeholder="Title" onChange={handleTitle}></textarea>
        <br />
        <textarea rows="10" cols="50" placeholder="Write a note..." onChange={handleNote}></textarea>
        <br />
        <button className="add" onClick={handleClick}>Add Note</button>
      </div>
      <div className="note-display">
        {
          notes.length === 0
          ?
          <p>No notes available</p>
          :
          <p>Notes :</p>
          
        }
      </div>
    </div>
  );
}

export default App;
