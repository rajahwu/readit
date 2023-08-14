export default function ReadableTitle({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="flex flex-col justify-start card-title">
      <h3>Title: &quot;{readable.title}&quot;</h3>
      <h2>Type: {readable.type}</h2>
    </div>
  );
}
