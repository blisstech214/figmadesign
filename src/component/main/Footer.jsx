import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function Footer({ onFooterClick }) {
  return (
    <div className="bg-orangedark p-3">
      <div className="flex justify-around list-none text-white items-center space-x-2 md:space-x-4 lg:space-x-6">
        <li className="text-center hover:text-blue" onClick={() => onFooterClick("home")}>
          <RiHome2Line className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Home</h1>
        </li>
        <li className="text-center hover:text-blue" onClick={() => onFooterClick("inbox")}>
          <IoArrowRedoOutline className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Inbox</h1>
        </li>
        <li className="text-center hover:text-blue" onClick={() => onFooterClick("outbox")}>
          <IoArrowUndoOutline className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Outbox</h1>
        </li>
        <li className="text-center hover:text-blue" onClick={() => onFooterClick("profile")}>
          <IoMdContact className="text-xl mx-auto" />
          <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base">Profile</h1>
        </li>
      </div>
    </div>
  );
}

export default Footer;
