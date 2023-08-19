import Image from "next/image";

export default function LandingPageCta() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={200}
          height={200}
        />
        <Image
          className="m-4 rounded"
          className="w-auto h-auto" src="/book.jpg"
          alt="a pic of a book"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col  justify-center items-center bg-black text-white">
        <div className="flex justify-center">
          <Image
            className="m-4 rounded"
            className="w-auto h-auto" src="/book.jpg"
            alt="a pic of a book"
            width={50}
            height={50}
          />
        </div>
        <h2 className="text-center">Getting Started</h2>
        <p className="text-center">
          Ready to revolutionize your reading experience? Sign up now and start
          exploring the world of books like never before!
        </p>
        <button className="btn">Join Readit Today!</button>
      </div>
    </div>
  );
}
