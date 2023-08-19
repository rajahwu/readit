import Image from "next/image";

export default function LandingPageMain() {
  return (
    <div className="bg-lime-200">
      <div className="flex justify-center">
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={350}
          height={200}
        />
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={350}
          height={200}
        />
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={350}
          height={200}
        />
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={350}
          height={200}
        />
      </div>
      <h2 className="text-3xl">Revolutionize Your Reading</h2>
      <div className="flex mx-3 justify-start">
        <p className="prose mx-3">
          Ever read a book and wish you could remember every detail or discuss
          it with others? ReadIt will change the way you experience reading
          forever. Let Mortimer J. Alder and Charles Van Doren guide you through
          their methods for truly effective reading.
        </p>
        <ul className="flex mx-5">
          <li className="text-3xl mx-5 text-center">
            <p>300</p>
            <p>Books Added</p>
          </li>
          <li className="text-3xl mx-5 text-center">
            <p>50</p>
            <p>Active Forums</p>
          </li>
          <li className="text-3xl mx-5 text-center">
            <p>1000</p>
            <p>Happy Readers</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
