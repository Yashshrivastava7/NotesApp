import Note from "./Note"

function NoteList({ notes }: any) {
    return (
        <div>
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