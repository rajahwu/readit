import Image from "next/image";

export default function LandingPageFeatures() {
  return (
    <div className="bg-purple-200">
      <h2 className="text-3xl">Exciting Features</h2>
      <div className="flex">
        <div className="mr-10">
          <Image
            className="m-4 rounded"
            className="w-auto h-auto" src="/book.jpg"
            alt="a pic of a book"
            width={350}
            height={200}
          />
        </div>
        <ul>
          <li>
            <h3 className="text-2xl">Organized List</h3>
            <p className="prose">
              Keep track of your books and their progress in one easy place.
            </p>
          </li>
          <li>
            <h3 className="text-2xl">In-Depth Notes</h3>
            <p className="prose">
              Capture your thoughts and ideas while reading each section.
            </p>
          </li>
          <li>
            <h3 className="text-2xl">Community Chats</h3>
            <p className="prose">
              Join forums and blogs to share your insights with fellow book
              lovers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
