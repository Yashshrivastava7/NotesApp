import "../styles/Note.css";
import { TokenType } from "../types/Types";

type Props = {
  // authToken: TokenType;
  id: string;
  title: string;
  note: string;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
};

function Note({ id, title, note, setRender }: Props) {
  const handleClick = async () => {
    const data = await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
    });
    setRender((old) => !old);
  };
  return (
    <div className="each-note">
      <h2>{title}</h2>
      <p>{note}</p>
      <button className="note-button" onClick={handleClick}>
        Delete note
      </button>
    </div>
  );
}

export default Note;
