
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import company from "../../../assets/first.jpg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdCamera } from "react-icons/io";

function SectionB() {
  return (
    <div className="w-full">
      <div className="flex justify-between px-10 py-5">
        <h1 className="text-lg md:font-semibold">Inbox Total</h1>
        <h1 className="text-xl font-bold">€0,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-32 bg-orange">
          <h1>BTW aan</h1>
          <h1 className="w-7 h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-lg" />
          </h1>
        </div>
      </div>

      <div className="bg-bgcolor md:px-10 md:p-10 p-5 space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center">
          <h1 className="text-lg font-bold text-orangedark">vandaag</h1>
          <h1 className="text-lg text-zinc-400">gisteren</h1>
          <h1 className="text-xl text-orangedark font-bold">
            <FiFilter className="" />
          </h1>
        </div>

        {/* Cards Section: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* First Card */}
          <div className="border-2 space-y-4 md:space-y-8 rounded-2xl p-5 bg-white border-orange shadow-md">
            <div>
              <h1 className="font-bold md:text-xl italic text-xl text-center text-blue">
                AI je facturen in 1 slimme box
              </h1>
              <h2 className="md:text-lg text-base text-blue font-medium text-center">
                Gratis inlezen van al je facturen en kassabonnen
              </h2>
            </div>

            <div className="grid grid-cols-2 px-2 justify-around items-center">
              <img src={company} alt="Company software" />
              <h1 className="bg-green text-center inline-block p-2 rounded-2xl text-white">
                Upload factuur
              </h1>
            </div>

            <h1 className="text-green font-semibold text-base">
              alle facturen zijn UBL proof en kun je doorsturen naar elk boekhoudpaket
            </h1>
          </div>

          {/* Second Card */}
          <div className="bg-white space-y-3 px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between space-y-3 items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  belangrijke facturen
                </h1>
                <h1 className="text-base md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-2xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
              <li className="w-16 h-16 bg-gray-300"></li>
              <li className="text-gray-300">leverancier A</li>
              <li className="text-gray-300">0</li>
              <li className="text-gray-300">€0,-</li>
            </p>
            <hr />
          </div>

          {/* Third Card */}
          <div className="bg-white space-y-3 px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between space-y-3 items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  belangrijke aankopen
                </h1>
                <h1 className="text-base md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-2xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
              <li className="w-16 h-16 bg-gray-300"></li>
              <li className="text-gray-300">aankoop A</li>
              <li className="text-gray-300">0</li>
              <li className="text-gray-300">€0,-</li>
            </p>
            <hr />w
          </div>

          {/* Fourth Card with Camera Icon */}
          <div className="bg-white space-y-3 px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between space-y-3 items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  jouw projecten
                </h1>
                <h1 className="text-base md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-2xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
              <li className="w-16 h-16 bg-gray-300 flex justify-center items-center">
                <IoMdCamera className="text-gray-400 text-3xl" />
              </li>
              <li className="text-gray-300">jouw projectnaam</li>
              <li className="text-gray-300">0</li>
              <li className="text-gray-300">€0,-</li>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionB;
