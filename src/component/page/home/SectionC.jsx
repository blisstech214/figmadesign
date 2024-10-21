
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import A from "../../../assets/A.png";
import B from "../../../assets/B.png";

function SectionC() {
  return (
    <div className="w-full">
       <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">inbox Total</h1>
        <h1 className="text-base sm:text-xl font-bold">€150,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>

      <div className="bg-bgcolor p-3 sm:p-5 md:p-10 space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-sm sm:text-lg font-bold text-orangedark">vandaag </h1>
            <span className="w-5 h-5 text-white bg-orangedark flex items-center justify-center rounded-full">
              1
            </span>
          </div>
          <h1 className="text-sm sm:text-lg text-zinc-400">gisteren</h1>
          <h1 className="text-lg sm:text-xl text-orangedark font-bold">
            <FiFilter />
          </h1>
        </div>

        {/* Cards Section: Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* First Card */}
          <div className="border-2 space-y-3 rounded-2xl p-3 sm:p-5 bg-white border-orange shadow-md">
            <h1 className="text-xs sm:text-sm md:text-base text-gray-300">
              Net ontvangen, vandaag 12:05
            </h1>
            <div className="flex justify-between items-center">
              <h1 className="text-sm sm:text-lg font-bold">Bouwmaat Haarlem</h1>
              <img src={A} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs sm:text-sm lg:text-lg font-medium">
              <img src={B} alt="product" className="w-10 h-10" />
              <p className="font-bold text-gray-300">
                Houten balken
                <br />
                138*38mm
              </p>
              <p className="text-gray-300">2 stuks</p>
              <p className="font-bold">€150,-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs sm:text-sm lg:text-lg font-medium">
              <button className="bg-orange text-white rounded-md p-1 px-3 sm:px-5">
                Bekijk
              </button>
              <p className="font-bold">Totaal factuur</p>
              <p className="font-bold">€150,-</p>
            </div>
            <div className="flex justify-between items-center">
              <IoShareSocialOutline className="text-xl sm:text-2xl" />
              <button className="bg-orangedark text-white rounded-lg p-1 px-2 sm:p-1">
                Naar boekhouding
              </button>
              <button className="bg-gray-300 text-white rounded-md p-1 px-2 sm:p-1">
                Naar project
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white space-y-3 p-3 sm:p-5 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-orangedark">
                  belangrijke facturen
                </h1>
                <h1 className="text-xs sm:text-sm md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-lg sm:text-xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-xs sm:text-sm flex justify-between items-center">
              <li>
                <img src={A} className="w-10 h-10" alt="A" />
              </li>
              <li className="text-black font-bold">Bouwmaat Haarlem</li>
              <li className="text-gray-300">1</li>
              <li className="text-black font-bold">€150,-</li>
            </p>
            <hr />
          </div>

          {/* Third Card */}
          <div className="bg-white space-y-3 p-3 sm:p-5 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-orangedark">
                  belangrijke aankopen
                </h1>
                <h1 className="text-xs sm:text-sm md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-lg sm:text-xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-xs sm:text-sm flex justify-between items-center">
              <li>
                <img src={B} className="w-10 h-10" alt="B" />
              </li>
              <li className="text-black font-bold">
                houten balken
                <br />
                138*38mm
              </li>
              <li className="text-gray-300">2 stuks</li>
              <li className="text-black font-bold">€150,-</li>
            </p>
            <hr />
          </div>

          {/* Fourth Card */}
          <div className="bg-white space-y-3 p-3 sm:p-5 border-2 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-orangedark">
                  jouw projecten
                </h1>
                <h1 className="text-xs sm:text-sm md:text-base text-gray-300">
                  je factuurbox is de eerste Gratis conversie facturen
                </h1>
              </div>
              <h1 className="text-orangedark text-lg sm:text-xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg list-none font-medium text-xs sm:text-sm flex justify-between items-center">
              <li className="w-10 h-10 bg-gray-200 flex justify-center items-center"></li>
              <li className="text-black font-bold">renovatie badkamer</li>
              <li className="text-gray-300">1</li>
              <li className="text-black font-bold">€150,-</li>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
