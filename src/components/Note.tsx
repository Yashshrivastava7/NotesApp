import "../styles/Note.css";
import { NoteObject } from "../types/Types";

type Props = {
  notes: NoteObject[];
  setNotes : React.Dispatch<React.SetStateAction<NoteObject[]>>;
};


function Note(props: NoteObject) {
  const handleClick = () => {
    
  }
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
