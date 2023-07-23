import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-around items-center p-8 shadow-md shadow-gray-700 sticky top-0 bg-[#1D232A] z-50">
      <Link href="/">
        <Image
          src="/minigptlogo.png"
          width={100}
          height={100}
          alt="minigpt logo"
          className="hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </Link>
      <div className="flex justify-center items-center gap-12">
        <Link href="/" className="hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
          Home
        </Link>
        <Link href="/about" className="hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
