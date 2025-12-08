import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 tracking-wide">Đà Nẵng Travel</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-300 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-300 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-600 transition duration-300 hover:underline">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition duration-300 hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white mt-2 shadow-md rounded-lg py-4 px-6 flex flex-col gap-4">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-600 transition duration-300">Booking</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition duration-300">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
