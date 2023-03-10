import { useState } from "react";
import "../styles/NewNoteSection.css";
import { NoteObject } from "../types/Types";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

type Props = {
  notes: NoteObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

function NewNoteSection({ notes, setNotes }: Props) {
  const [note, setNote] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleClick = () => {
    const userID= uuidv4(); 
    let obj: NoteObject = {
      ID: newUser,
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
        ></textarea>
        <br />
        <textarea
          rows={10}
          cols={50}
          placeholder="Write a note..."
          onChange={handleNote}
        ></textarea>
        <br />
      </div>
      <button className="add" onClick={handleClick}>
        Add Note
      </button>
    </div>
  );
}

export default NewNoteSection;
