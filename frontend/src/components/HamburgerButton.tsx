import React from "react";

interface HamburgerButtonProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({isOpen, toggleOpen}) => {
  return (
    <button
      onClick={toggleOpen}
      className="block md:hidden p-2 rounded-md bg-gray-700 focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        ></path>
      </svg>
    </button>
  );
};

export default HamburgerButton;
