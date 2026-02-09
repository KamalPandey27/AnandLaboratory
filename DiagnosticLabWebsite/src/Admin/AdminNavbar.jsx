import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            TestPanel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[17px] font-semibold text-gray-700 ">
            <NavLink to="/admin" end="/admin" className={navLinkClass}>
              Add Test
            </NavLink>
            <NavLink to="/admin/manage-test" className={navLinkClass}>
              Manage Test
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-white shadow-lg transition-all ease-in-out duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          <NavLink
            to="/admin"
            end="/admin"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Add Test
          </NavLink>
          <NavLink
            to="/admin/manage-test"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Manage Test
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
