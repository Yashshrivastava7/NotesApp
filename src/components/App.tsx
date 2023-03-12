import { useState } from "react";
import "../styles/App.css";
import NewNoteSection from "./NewNoteSection";
import NoteList from "./NoteList";
import { NoteObject } from "../types/Types";
import Login from "./Login";

function App() {
  // const [notes, setNotes] = useState<NoteObject[]>([]);
  // return (
  //   <div className="app-container">
  //     <div className="todo-section">
  //       <NewNoteSection notes={notes} setNotes={setNotes} />
  //     </div>
  //     <div className="todo-section">
  //       <NoteList notes={notes} setNotes={setNotes}/>
  //     </div>
  //   </div>
  // );
  return (
    <Login/>
  );
}

export default App;
