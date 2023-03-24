import { useState } from "react";
import "../styles/App.css";
import NewNoteSection from "./NewNoteSection";
import NoteList from "./NoteList";
import { TokenType } from "../types/Types";
import { Navigate } from "react-router";

type Props = {
  authToken: TokenType;
  setAuthToken: React.Dispatch<React.SetStateAction<TokenType>>;
};

function App(props: Props) {
  const [render, setRender] = useState<boolean>(false);
  console.log(`Inside App ${props.authToken?.Authorization}`);
  return props.authToken ? (
    <div className="app-container">
      <div className="todo-section">
        <NewNoteSection
          setRender={setRender}
          authToken={props.authToken}
          setAuthToken={props.setAuthToken}
        />
      </div>
      <div className="todo-section">
        <NoteList
          render={render}
          setRender={setRender}
          authToken={props.authToken}
        />
      </div>
    </div>
  ) : (
    <Navigate replace to="/" />
  );
}

export default App;
