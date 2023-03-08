import "../styles/Note.css";
import { NoteObject } from "../types/Types";

function Note(props: NoteObject) {
  return (
    <div className="each-note">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default Note;
