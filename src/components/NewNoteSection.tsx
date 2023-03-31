import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/NewNoteSection.css";
import { TokenType } from "../types/Types";

type Props = {
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  authToken: TokenType;
  setAuthToken: React.Dispatch<React.SetStateAction<TokenType>>;
};

function NewNoteSection({ setRender, authToken, setAuthToken }: Props) {
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
    const res = await fetch("http://localhost:8080/notes", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken!.Authorization,
      },
      body: JSON.stringify(Noteobj),
    });
    const data = await res.json();
    if (res.status === 401) {
      toast.error(data.message);
    }
    toast.success("Note Added Successfully");
    setRender((old) => !old);
  };

  return (
    <div className="App">
      <div className="new-note-container">
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
      </div>
      <div className="logout-container">
        <button
          onClick={() => {
            setAuthToken(null);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NewNoteSection;
