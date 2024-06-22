const Navbar = () => {
  return (
    <header className="bg-[#252730] p-5 text-md font-bold">
      <nav className="flex items-center justify-center gap-x-5 ">
        <a href="" className="hover:text-red-500 transition-all duration-300">
          Audio Compression
        </a>
        <a href="" className="hover:text-red-500 transition-all duration-300">
          Image Compression
        </a>
        <a href="" className="hover:text-red-500 transition-all duration-300">
          Video Compression
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
