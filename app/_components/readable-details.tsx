import { NewNote, Rating, ReadableTitle } from ".";
import DeleteNoteButton from "./delete-note-button";
import DeleteReadableButton from "./delete-readable-button";

const ReadableNotes = ({ readable }: { readable: ReadableWithReader }) => (
  <div className="bg-yellow-600 flex-1">
    <ul>
      <h3 className="text-md text-bold text-center">Notes</h3>
      {readable.notes.length
        ? readable.notes.map((note) => (
            <div key={note.id} className="flex justify-between">
              <li>{note.title}</li>
              <DeleteNoteButton note={note} />
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
    <div className="flex flex-col w-1/4 m-6 rounded border border-red-800 hover:z-10 hover:shadow-lg transition-all duration-1000 ease-in-out delay-75">
      <ReadableTitle readable={readable} />
      <Rating readable={readable} />
      <ReadableNotes readable={readable} />
      <NewNote readable={readable} />
      <DeleteReadableButton readable={readable} />
    </div>
  );
}
