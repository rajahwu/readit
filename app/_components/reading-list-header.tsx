import { NewReadable, ReaderProfile } from ".";

export default function ReadingListHeader() {
  return (
    <div className="flex justify-between border bg-slate-500">
      <div className="m-4">
        <h2 className="text-2xl">Readables</h2>
        <NewReadable />
      </div>
      <ReaderProfile />
    </div>
  );
}
