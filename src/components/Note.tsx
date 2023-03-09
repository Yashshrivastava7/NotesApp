import "../styles/Note.css";
import { NoteObject } from "../types/Types";

const handleClick = () => {

}

function Note(props: NoteObject) {
  return (
    <div className="each-note">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button className="note-button" onClick={handleClick}>
        Delete note
      </button>
    </div>
  );
}

export default Note;
