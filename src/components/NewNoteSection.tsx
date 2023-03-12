import { useState } from "react";
import "../styles/NewNoteSection.css";
import { NoteObject } from "../types/Types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type Props = {
  notes: NoteObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

function NewNoteSection({ notes, setNotes }: Props) {
  const [note, setNote] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();

  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleClick = () => {
    const userID = uuidv4();
    let obj: NoteObject = {
      id: userID,
      title: title,
      body: note,
    };
    if (
      notes.length !== 0 &&
      title == notes[0].title &&
      note == notes[0].body
    ) {
      return;
    }
    setNotes((old: NoteObject[]): NoteObject[] => {
      return [obj, ...old];
    });
  };

  return (
    <div className="App">
      <h1>NotesApp</h1>
      <div className="card">
        <textarea
          rows={1}
          cols={50}
          placeholder="Title"
          onChange={handleTitle}
          className="note-title"
        ></textarea>
        <textarea
          rows={10}
          cols={50}
          placeholder="Write a note..."
          onChange={handleNote}
          className="note-body"
        ></textarea>
      </div>
      <button className="add" onClick={handleClick}>
        Add Note
      </button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default NewNoteSection;
