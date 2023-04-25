import Note from "./Note";
import "../styles/NoteList.css";
import { NoteObject, TokenType } from "../types/Types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
};

function NoteList({ setRender, render }: Props) {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:8080/notes", {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });
      if (data.status === 403) {
        navigate("/");
      }
      const jsonData = await data.json();
      setNotes((old) =>
        jsonData.map((obj: any): NoteObject => {
          return {
            id: obj._id,
            title: obj.title,
            note: obj.note,
          };
        })
      );
    }
    fetchData();
  }, [render]);
  console.log(notes);
  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="note-container">
        {notes.length === 0 ? (
          <p>No Notes Available</p>
        ) : (
          <>
            {notes.map((note: NoteObject) => {
              return (
                <Note {...note} setRender={setRender} />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default NoteList;
