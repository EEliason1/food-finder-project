import React from "react";
import NavLinks from "./NavLinks";

const Navbar: React.FC = () => {
  return (
    <div className="flex content-between justify-between items-center p-4 bg-blue-900 text-slate-200">
      <h1 className="">Food Finder</h1>
      <NavLinks />
    </div>
  );
};

export default Navbar;
