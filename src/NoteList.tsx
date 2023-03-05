import Note from "./Note"
import './NoteList.css'

function NoteList({ notes }: any) {
  return (
    <div className="container">
      <h1>
        Notes
      </h1>
      <div>
        {
          notes.length === 0 ?
          <p>No Notes Available</p>
          : <div>
            {
              notes.map((note: any) => {
                return <Note title={note.title} body={note.body} />  
              })
            }
          </div>
        }
      </div>
    </div>
  );
}

export default NoteList;
