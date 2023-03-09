import Note from "./Note";
import "../styles/NoteList.css";
import { NoteObject } from "../types/Types";

type Props = {
  notes: NoteObject[];
  setNotes : React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

function NoteList({ notes , setNotes }: Props) {
  return (
    <div className="container">
      <h1>Notes</h1>
      <div>
        {notes.length === 0 ? (
          <p>No Notes Available</p>
        ) : (
          <div>
            {notes.map((note: NoteObject) => {
              return <Note ID={note.ID} title={note.title} body={note.body} setNotes={setNotes}/>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteList;
