import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/85 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Shireen Khan
        </h1>

        {/* Desktop Navigation Link Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition-colors
                  duration-200
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-200"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div
        className={`fixed inset-x-0 top-[65px] bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-8">
          {navItems.map((item) => (
            <li key={item} className="w-full text-center">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="
                  block
                  py-3
                  text-lg
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-slate-800/40
                  transition-all
                  duration-200
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;