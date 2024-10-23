import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function Footer({ onFooterClick }) {
  return (
    <div className="bg-orangedark p-3">
      <div className="flex justify-around list-none text-white items-center space-x-2 md:space-x-4 lg:space-x-6">
        {/* Home Icon */}
        <li
          className="text-center hover:text-blue cursor-pointer"
          onClick={() => onFooterClick("home")}
        >
          <RiHome2Line className="text-lg sm:text-xl md:text-2xl mx-auto" />
          <h1 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
            Home
          </h1>
        </li>

        {/* Inbox Icon */}
        <li
          className="text-center hover:text-blue cursor-pointer"
          onClick={() => onFooterClick("inbox")}
        >
          <IoArrowRedoOutline className="text-lg sm:text-xl md:text-2xl mx-auto" />
          <h1 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
            Inbox
          </h1>
        </li>

        {/* Upload Icon */}
        <li className="cursor-pointer space-y-1">
          <div className="rounded-lg bg-white flex items-center justify-center text-blue border-2 hover:border-blue w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto">
            +
          </div>
          <h1 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-center">
            Upload
          </h1>
        </li>

        {/* Outbox Icon */}
        <li
          className="text-center hover:text-blue cursor-pointer"
          onClick={() => onFooterClick("outbox")}
        >
          <IoArrowUndoOutline className="text-lg sm:text-xl md:text-2xl mx-auto" />
          <h1 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
            Outbox
          </h1>
        </li>

        {/* Profile Icon */}
        <li
          className="text-center hover:text-blue cursor-pointer"
          onClick={() => onFooterClick("profile")}
        >
          <IoMdContact className="text-lg sm:text-xl md:text-2xl mx-auto" />
          <h1 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
            Profile
          </h1>
        </li>
      </div>
    </div>
  );
}

export default Footer;
