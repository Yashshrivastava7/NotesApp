import { useState } from "react";
import "../styles/NewNoteSection.css";
import { TokenType } from "../types/Types";

type Props = {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  authToken: TokenType;
  setAuthToken: React.Dispatch<React.SetStateAction<TokenType>>;
};

function NewNoteSection({ render, setRender, authToken, setAuthToken }: Props) {
  const [note, setNote] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleClick = async () => {
    const Noteobj = {
      title: title,
      note: note,
    };
    const data = await fetch("http://localhost:8080/notes", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken!.Authorization,
      },
      body: JSON.stringify(Noteobj),
    });
    if (render === true) {
      setRender(false);
    } else {
      setRender(true);
    }
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
      <button
        onClick={() => {
          setAuthToken(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default NewNoteSection;
