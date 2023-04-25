import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/NewNoteSection.css";
import { useNavigate } from "react-router-dom";

type Props = {
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewNoteSection({ setRender }: Props) {
  const [note, setNote] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();

  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleClick = async () => {
    const noteObj = {
      title: title,
      note: note,
    };
    const res = await fetch("http://localhost:8080/notes", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteObj),
    });
    const data = await res.json();
    if (res.status === 400) {
      toast.error(data.message);
      return;
    }
    toast.success("Note Added Successfully");
    setRender((old) => !old);
  };

  const handleLogout = async () => {
    await fetch("http://localhost:8080/logout", {
      mode: "cors",
      credentials: "include",
    });
    navigate("/");
  }

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
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NewNoteSection;
