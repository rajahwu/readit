import { NewNote, Rating } from ".";

const ReadableNotes = ({ readable }: { readable: ReadableWithReader }) => (
  <ul>
    <h3 className="text-sm">Notes</h3>
    {readable.notes.length
      ? readable.notes.map((note) => (
          <div key={note.id} className="flex justify-between">
            <li>{note.title}</li>
            <button className="border">Delete</button>
          </div>
        ))
      : "none"}
  </ul>
);

export default function ReadableDetailsCard({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="card-body">
      <p>{readable.title}</p>
      <p>{readable.author}</p>
      <div className="">
        <NewNote readable={readable} />
      </div>
      <div className="">
        <Rating readable={readable} />
      </div>
      <hr />
      <ReadableNotes readable={readable} />
    </div>
  );
}
