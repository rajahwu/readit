export default function ReadableTitle({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="bg-violet-600">
      <p>Title: &quot;{readable.title}&quot;</p>
      <p>{readable.author}</p>
      <p>Type: {readable.type}</p>
    </div>
  );
}
