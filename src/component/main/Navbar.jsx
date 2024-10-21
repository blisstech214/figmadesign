
import React from "react";
import logo from "../../assets/logo.png";
import { HiOutlineBars2 } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="p-3 lg:p-4">
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 ml-2" />
          <h1 className="text-blue text-xl sm:text-2xl md:text-3xl font-bold">je factuurbox</h1>
        </div>

        {/* Year */}
        <h2 className="text-orangedark text-base sm:text-lg md:text-2xl font-bold">2024</h2>

        {/* Menu Icon */}
        <button className="text-blue text-2xl sm:text-3xl md:text-4xl">
          <HiOutlineBars2 />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
