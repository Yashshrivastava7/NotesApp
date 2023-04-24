import { useState } from "react";
import "../styles/App.css";
import NewNoteSection from "./NewNoteSection";
import NoteList from "./NoteList";

function App() {
  const [render, setRender] = useState<boolean>(false);
  return (<div className="app-container">
    <div className="todo-section">
      <NewNoteSection
        setRender={setRender}
      />
    </div>
    <div className="todo-section">
      <NoteList
        render={render}
        setRender={setRender}
      />
    </div>
  </div>);
}

export default App;
