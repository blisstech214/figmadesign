
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import company from "../../../assets/first.jpg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdCamera } from "react-icons/io";

function SectionB() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">inbox Total</h1>
        <h1 className="text-base sm:text-xl font-bold">€0,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>

      <div className="bg-bgcolor md:px-10 md:p-10 p-4 space-y-4 md:space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center">
          <h1 className="text-sm md:text-lg font-bold text-orangedark">vandaag</h1>
          <h1 className="text-sm md:text-lg text-zinc-400">gisteren</h1>
          <h1 className="text-lg md:text-xl text-orangedark font-bold">
            <FiFilter />
          </h1>
        </div>

        {/* Cards Section: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {/* First Card */}
          <div className="border-2 space-y-3 sm:space-y-5 rounded-2xl p-4 sm:p-5 bg-white border-orange shadow-md">
            <div className="text-center">
              <h1 className="font-bold text-base sm:text-xl italic text-blue">
                AI je facturen in 1 slimme box
              </h1>
              <h2 className="text-xs sm:text-lg text-blue font-medium">
                Gratis inlezen van al je facturen en kassabonnen
              </h2>
            </div>
            <div className="flex gap-3">
              <img src={company} alt="Company software" className="w-[60%]" />
              <div className="flex justify-center items-center">
                <button className="bg-green text-center p-2 sm:p-4 px-3 sm:px-5 rounded-2xl text-white text-xs sm:text-sm">
                  Upload factuur
                </button>
              </div>
            </div>
            <p className="text-xs sm:text-base text-green font-semibold">
              alle facturen zijn UBL proof en kun je doorsturen naar elk
              boekhoudpaket
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-white space-y-3 px-4 md:px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  belangrijke facturen
                </h1>
                <h1 className="text-xs md:text-base text-gray-300">
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
          <div className="bg-white space-y-3 px-4 md:px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  belangrijke aankopen
                </h1>
                <h1 className="text-xs md:text-base text-gray-300">
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
            <hr />
          </div>

          {/* Fourth Card with Camera Icon */}
          <div className="bg-white space-y-3 px-4 md:px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-base md:text-xl font-bold text-orangedark">
                  jouw projecten
                </h1>
                <h1 className="text-xs md:text-base text-gray-300">
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
