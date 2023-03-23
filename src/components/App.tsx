import { useState } from "react";
import "../styles/App.css";
import NewNoteSection from "./NewNoteSection";
import NoteList from "./NoteList";
import { NoteObject, TokenType } from "../types/Types";

type Props = {
  authToken: TokenType;
};

function App(props: Props) {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  console.log(`Inside App ${props.authToken?.Authorization}`);
  return props.authToken ? (
    <div className="app-container">
      <div className="todo-section">
        <NewNoteSection notes={notes} setNotes={setNotes} />
      </div>
      <div className="todo-section">
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  ) : (
    <h1>Forbidden</h1>
  );
}

export default App;
