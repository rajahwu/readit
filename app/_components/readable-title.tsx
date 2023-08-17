export default function ReadableTitle({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="bg-violet-600 flex-1">
      <h2 className="text-2xl font-bold text-center">&quot;{readable.title}&quot;</h2>
      <p className="text-md">{readable.author}</p>
      <p className="text-sm">{readable.type}</p>
    </div>
  );
}
