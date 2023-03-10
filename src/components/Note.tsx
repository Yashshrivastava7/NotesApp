import "../styles/Note.css";
import { NoteObject } from "../types/Types";

type Props = {
  ID: string;
  title: string;
  body: string;
  setNotes : React.Dispatch<React.SetStateAction<NoteObject[]>>;
};


function Note(props: Props) {
  const handleClick = () => {
    props.setNotes((old : NoteObject[]) : NoteObject[] => {
      const idToRemove : string = props.ID;
      const filteredArr : NoteObject[] = old.filter((item) => item.id !== idToRemove);
      return filteredArr;
    })
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
