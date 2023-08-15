import { NewNote, Rating, ReadableTitle } from ".";

const ReadableNotes = ({ readable }: { readable: ReadableWithReader }) => (
  <div className="bg-yellow-600">
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
  </div>
);

export default function ReadableDetailsCard({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="flex flex-col m-16 w-full">
      <div className="flex">
        <ReadableTitle readable={readable} />
        <Rating readable={readable} />
      </div>
      <div className="flex">
        <ReadableNotes readable={readable} />
        <NewNote readable={readable} />
      </div>
    </div>
  );
}
