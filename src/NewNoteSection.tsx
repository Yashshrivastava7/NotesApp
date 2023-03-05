import { useState } from 'react'
import './NewNoteSection.css'

function NewNoteSection({ setNotes }: any) {
  const [note , setNote] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleNote = (e : any) => {
    setNote(e.target.value)
  }
  const handleTitle = (e : any) => {
    setTitle(e.target.value)
  }
  const handleClick = () => {
    let obj = {
      title: title,
      body: note,
    }
    // if (notes.length !== 0 && title == notes[0].title && note == notes[0].body) {
    //   return;
    // }
    setNotes((old: any) => {
      return [obj, ...old];
    });
  }
  
  return (
    <div className="App">
      <h1>NotesApp</h1>
      <div className="card">
        <textarea rows={1} cols={50} placeholder="Title" onChange={handleTitle}></textarea>
        <br />
        <textarea rows={10} cols={50} placeholder="Write a note..." onChange={handleNote}></textarea>
        <br />
      </div>
      <button className="add" onClick={handleClick}>Add Note</button>       
    </div>
  );
}

export default NewNoteSection;
