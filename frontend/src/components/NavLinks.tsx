import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import { useAuth } from "../contexts/AuthContext";

const NavLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-[18px]">
      <HamburgerButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <ul
        className={`absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 md:flex md:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="border-none">
          <Link to="/" className="hover:text-slate-400">
            Home
          </Link>
        </li>
        <li className="border-none">
          <Link to="/restaurant-questions" className="hover:text-slate-400">
            Restaurants
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="border-none">
              <Link to="/favorites" className="hover:text-slate-400">
                Favorites
              </Link>
            </li>
            <li className="border-none">
              <Link to="/profile" className="hover:text-slate-400">
                Profile
              </Link>
            </li>
          </>
        ) : (
          <>
            <Link to="/sign-in" className="hover:text-slate-400">
              Sign In
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
