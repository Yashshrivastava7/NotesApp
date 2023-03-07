import Note from "./Note";
import "../styles/NoteList.css";
import { NoteObject } from "../types/Types";

type Props = {
  notes: NoteObject[];
};

function NoteList({ notes }: Props) {
  return (
    <div className="container">
      <h1>Notes</h1>
      <div>
        {notes.length === 0 ? (
          <p>No Notes Available</p>
        ) : (
          <div>
            {notes.map((note: NoteObject) => {
              return <Note title={note.title} body={note.body} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteList;
