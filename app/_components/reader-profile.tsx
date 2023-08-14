export default function ReaderProfile({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  return (
    <div className="card-body">
      <p>{readable.reader.name}</p>
      <p>{readable.reader.username}</p>
      <p>{readable.reader.avatar_url}</p>
    </div>
  );
}
