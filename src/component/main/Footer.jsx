
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-orangedark p-3">
      <div className="flex justify-around list-none text-white items-center space-x-2 md:space-x-4 lg:space-x-6">
        {/* Home Icon */}
        <li className="text-center">
          <RiHome2Line className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Home</h1>
        </li>

        {/* Inbox Icon */}
        <li className="text-center">
          <IoArrowRedoOutline className="text-xl mx-auto transform rotate-90" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Inbox</h1>
        </li>

        {/* Plus Icon */}
        <li className="space-y-1 text-center">
          <h1 className="text-xl bg-white text-orangedark w-8 h-8 mx-auto rounded-full flex items-center justify-center hover:bg-orangedark hover:text-white transition-all">
            +
          </h1>
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Factuur Uploaden</h1>
        </li>

        {/* Outbox Icon */}
        <li className="text-center">
          <IoArrowUndoOutline className="text-xl mx-auto transform rotate-90" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Outbox</h1>
        </li>

        {/* Profile Icon */}
        <li className="text-center">
          <IoMdContact className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Profile</h1>
        </li>
      </div>
    </div>
  );
}

export default Footer;
