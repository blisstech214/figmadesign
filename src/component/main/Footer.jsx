import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { useRef } from "react";
function Footer({ onFooterClick }) {
  const fileInputRef = useRef(null); // Create a reference for the file input

  const handleClick = () => {
    // Trigger the file input when the custom element is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (event) => {
    // Reset the file input value to hide the chosen file
    event.target.value = null; // This ensures no file name is shown

    // Optionally, handle the selected file here
    const fileName = event.target.files[0]?.name || "No file chosen";
    console.log(fileName); // You can use this to upload the file or show an alert
  };
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
          <input
            type="file"
            ref={fileInputRef} // Attach the ref to the input
            className="hidden" // Hide the input from the UI
            onChange={handleChange} // Handle the file selection
          />
          <div
            onClick={handleClick} // Trigger file input on click
            className="flex items-center justify-center p-1 bg-white text-orangedark hover:border-blue   rounded-lg border border-blue-500 cursor-pointer"
          >
            <span className="text-sm  ">+</span> {/* Plus icon */}
          </div>
          <h1 className="text-sm text-center hover:text-blue">Upload</h1>
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
