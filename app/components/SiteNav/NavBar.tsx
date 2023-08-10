import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="navbar flex justify-between bg-red-200">
          <div>
            <Image src="/readit-logo.png" alt="site logo" width={75} height={75} />
          </div>
          <ul className="flex">
            <li className="btn m-1">Home</li>
            <li className="btn m-1">Features</li>
            <li className="btn m-1">Community</li>
          </ul>
        </nav>
      );
      
} 