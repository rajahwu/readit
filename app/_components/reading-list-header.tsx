import { NewReadable, ReaderProfile } from ".";

export default function ReadingListHeader() {
  return (
    <div className="flex flex-col border bg-slate-500">
      <ReaderProfile />
      <h2 className="text-2xl">Readables</h2>
      <NewReadable />
    </div>
  );
}
