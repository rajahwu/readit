export default function ReadableTitle({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="bg-violet-600 flex-1">
      <p>Title: &quot;{readable.title}&quot;</p>
      <p>{readable.author}</p>
      <p>Type: {readable.type}</p>
    </div>
  );
}
