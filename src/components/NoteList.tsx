import Note from "./Note";
import "../styles/NoteList.css";
import { NoteObject, TokenType } from "../types/Types";
import { useEffect, useState } from "react";

type Props = {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  authToken: TokenType;
};

function NoteList({ setRender, render, authToken }: Props) {
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
                <Note
                  {...note}
                  setRender={setRender}
                  render={render}
                  authToken={authToken}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default NoteList;
