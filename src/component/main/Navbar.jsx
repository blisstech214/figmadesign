
import React, { useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import Footer from "./Footer";
import DashBoard from "../page/home/DashBoard";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleFooter = () => {
    setOpen(!open);
  };

  // Handle sidebar menu clicks for page navigation
  const handleMenuClick = (page) => {
    // Update active page immediately when a menu item is clicked
    setActivePage(page);
  };

  // File input reference for the upload button
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    event.target.value = null; // Reset the file input value to hide the chosen file
    const fileName = event.target.files[0]?.name || "No file chosen";
    console.log(fileName); // Handle the selected file (e.g., upload or display)
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="p-3 lg:p-4 bg-gray-100 flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 ml-2" />
          <div className="flex lg:gap-24 md:gap-24 gap-5">
            <h1 className="text-blue text-xl flex items-center justify-center sm:text-2xl md:text-3xl font-bold">
              je factuurbox
            </h1>
            <h2 className="text-orangedark flex items-center justify-center text-base sm:text-lg md:text-2xl font-bold">
              2024
            </h2>
          </div>
        </div>

        {/* Menu Icon for Mobile and Tablet View */}
        <button
          className="text-blue text-2xl block lg:hidden sm:text-3xl md:text-4xl"
          onClick={toggleFooter}
        >
          <HiOutlineBars2 />
        </button>
      </nav>

      {/* Sidebar for Desktop View */}
      <div className="flex flex-1">
        <aside className="hidden lg:flex bg-orangedark p-10">
          <ul className="text-white list-none space-y-20 cursor-pointer">
            <li
              className="flex gap-5 items-center hover:text-blue"
              onClick={() => handleMenuClick("home")} // Ensure home page opens instantly
            >
              <RiHome2Line className="text-2xl" />
              <h1 className="text-sm md:text-base">Home</h1>
            </li>
            <li
              className="flex gap-5 items-center hover:text-blue"
              onClick={() => handleMenuClick("inbox")}
            >
              <IoArrowRedoOutline className="text-2xl" />
              <h1 className="text-sm md:text-base">Inbox</h1>
            </li>
            <li
              className="flex gap-5 items-center hover:text-blue"
              onClick={() => handleMenuClick("outbox")}
            >
              <IoArrowUndoOutline className="text-2xl" />
              <h1 className="text-sm md:text-base">Outbox</h1>
            </li>
            <li
              className="flex gap-5 items-center hover:text-blue"
              onClick={() => handleMenuClick("profile")}
            >
              <IoMdContact className="text-2xl" />
              <h1 className="text-sm md:text-base">Profile</h1>
            </li>

            <li className="cursor-pointer space-y-1">
              <input
                type="file"
                ref={fileInputRef} // Attach the ref to the input
                className="hidden" // Hide the input from the UI
                onChange={handleFileChange} // Handle the file selection
              />
              <div
                onClick={handleUploadClick} // Trigger file input on click
                className="flex items-center justify-center p-1 bg-white text-orangedark hover:border-blue rounded-lg border border-blue-500 cursor-pointer"
              >
                <span className="text-xl">+</span> {/* Plus icon */}
              </div>
              <h1 className="text-base text-center hover:text-blue">Upload</h1>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <DashBoard activePage={activePage} /> {/* Pass activePage as a prop */}
      </div>

      {/* Footer Overlay for Mobile and Tablet View */}
      <footer
        className={`fixed inset-x-0 bottom-0 bg-orangedark transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
        onDoubleClick={toggleFooter}
      >
        <Footer onFooterClick={handleMenuClick} /> {/* Pass handleClick for Footer */}
      </footer>
    </div>
  );
}

export default Navbar;
