import "../styles/Note.css";
import { TokenType } from "../types/Types";

type Props = {
  authToken: TokenType;
  id: string;
  title: string;
  note: string;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
};

function Note({ authToken, id, title, note, setRender }: Props) {
  const handleClick = async () => {
    const data = await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken!.Authorization,
      },
    });
    setRender((old) => !old);
  };
  return (
    <div className="each-note">
      <div className="title-and-note">
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <div className="del-button-container">
        <button className="note-button" onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default Note;
