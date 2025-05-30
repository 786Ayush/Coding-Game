import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 h-16">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href={"/"} className="text-white text-lg font-bold">
          Coding Game
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
