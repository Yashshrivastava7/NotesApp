import '../styles/Note.css'

type Props = {
    title: string,
    body: string
};
function Note(props: Props) {
    return (
    <div className="each-note">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
    );
}

export default Note;
