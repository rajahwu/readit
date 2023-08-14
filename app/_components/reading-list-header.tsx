import { NewReadable } from "."

export default function ReadingListHeader() {
    return (
        <div className="flex flex-col border bg-slate-500">
        <h2 className="text-2xl">New Readable</h2>
        <NewReadable />
      </div>
    )
}