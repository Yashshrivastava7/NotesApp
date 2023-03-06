import { useState } from 'react';
import '../styles/App.css'

import NewNoteSection from "./NewNoteSection";
import NoteList from "./NoteList";

type DataObject = {
  title: string,
  body: string
}

function App() {
  const [notes, setNotes] = useState<DataObject[]>([]);
  return (
    <div className="app-container">
      <div className="todo-section">
        <NewNoteSection setNotes={setNotes}/>
      </div>
      <div className="todo-section">
        <NoteList notes={notes}/>
      </div>
    </div>
  );
}

export default App;
