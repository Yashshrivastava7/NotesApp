import Note from "./Note";
import "../styles/NoteList.css";
import { NoteObject, TokenType } from "../types/Types";
import { useEffect, useState } from "react";

type Props = {
  //notes: NoteObject[];
  authToken: TokenType;
  // setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

function NoteList({ authToken }: Props) {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:8080/notes", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken!.Authorization,
        },
      });
      const jsonData = await data.json();
      setNotes((old) => jsonData.map((obj: any): NoteObject => {
        return {
          id: obj._id,
          title: obj.title,
          note: obj.note
        };
      }));
    }
    fetchData();
  }, []);
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
              return <Note {...note} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default NoteList;
