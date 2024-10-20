
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
// import { FaPlus } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-orangedark p-4">
      <div className="flex justify-around text-white space-x-4 list-none items-center  md:space-x-8 lg:space-x-12">
        {/* Home Icon */}
        <li className="hover:animate-blink transition-all duration-300">
          <RiHome2Line className="text-2xl ml-2 flex" />
          <h1 className="flex justify-center text-sm md:text-base">Home</h1>
        </li>

        {/* Inbox Icon with Rotation and Blink */}
        <li className="hover:animate-blink   transition-all  duration-300">
        <IoArrowRedoOutline
            className="text-2xl ml-2 transform  rotate-90 hover:rotate-360 transition-transform duration-500"
          />
          <h1 className="flex justify-center text-sm md:text-base">Inbox</h1>
        </li>

        {/* Plus Icon (with Blink) */}
        <li className="space-y-2">
          <h1 className="text-lg bg-white hover:outline-double hover:outline-white text-orangedark  text-center p-1 rounded-full transition-all hover:bg-orangedark hover:text-white">
            +
          </h1>
          <h1 className="flex justify-center text-xs md:text-base">Factuur Uploaden</h1>
        </li>

        {/* Outbox Icon with Rotation and Blink */}
        <li className="hover:animate-blink transition-all duration-300">
         
           <IoArrowUndoOutline
            className="text-2xl ml-2 transform rotate-90 hover:rotate-360 transition-transform duration-500"
          />
          <h1 className="flex justify-center text-sm md:text-base">Outbox</h1>
        </li>

        {/* Profile Icon with Blink */}
        <li className="hover:animate-blink transition-all duration-300">
          <IoMdContact className="text-2xl ml-2" />
          <h1 className="flex justify-center text-sm md:text-base">Profile</h1>
        </li>
        {/* <li>
          Privacy
        </li> */}
      </div>
    </div>
  );
}

export default Footer;
