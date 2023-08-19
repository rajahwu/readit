import Image from "next/image";
import AuthButtonServer from "../auth-button-server";

export default function NavBar() {
  return (
    <nav className="navbar flex justify-between bg-red-200">
      <div>
        <Image className="w-auto h-auto" src="/readit-logo.png" alt="site logo" width={75} height={75} />
      </div>
      <ul className="flex">
        <li className="btn m-1">Home</li>
        <li className="btn m-1">Features</li>
        <li className="btn m-1">Community</li>
        <li className="btn m-1">
          <a href="/docs/index.html" target="_blank">
            Docs
          </a>
        </li>
        <li className="btn m-1">
          <AuthButtonServer />
        </li>
      </ul>
    </nav>
  );
}
