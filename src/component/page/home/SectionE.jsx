
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

import A from "../../../assets/A.png";
import B from "../../../assets/B.png";
import C from "../../../assets/logoT.png";

function SectionE() {
  return (
    <div className="w-full px-4 md:px-10 py-5">
     <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">inbox Total</h1>
        <h1 className="text-base sm:text-xl font-bold">€230,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>

      <div className="bg-bgcolor p-5 md:p-10 space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center mb-5">
          <div className="flex items-center gap-2">
            <h1 className="text-base md:text-lg font-bold text-orangedark">Vandaag</h1>
            <span className="w-6 h-6 text-white bg-orangedark flex items-center justify-center rounded-full">1</span>
          </div>
          <h1 className="text-base text-zinc-400">gisteren</h1>
          <h1 className="text-xl text-orangedark font-bold">
            <FiFilter />
          </h1>
        </div>

        {/* Cards Section: Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* First Card */}
          <div className="border-2 rounded-2xl p-5 bg-white border-orange shadow-md space-y-2">
            <h1 className="text-xs md:text-sm text-gray-400">Net ontvangen, vandaag 12:05</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-sm md:text-lg font-bold">Bouwmaat Haarlem</h1>
              <img src={A} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <img src={B} alt="product" className="w-10 h-10" />
              <p className="text-gray-400">Houten balken<br />138*38mm</p>
              <p className="text-gray-400">2 stuks</p>
              <p className="font-bold">€150,-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <button className="bg-orange text-white rounded-md p-1 px-5">Bekijk</button>
              <p className="font-bold">Totaal factuur</p>
              <p className="font-bold">€150,-</p>
            </div>
            <div className="flex justify-between items-center">
              <IoShareSocialOutline className="text-2xl" />
              <button className="bg-orangedark text-white rounded-lg p-1">Naar boekhouding</button>
              <button className="bg-gray-300 text-white rounded-md p-1">Naar project</button>
            </div>
          </div>

          {/* 2nd Card */}
          <div className="border-2 rounded-2xl p-5 bg-white border-orange shadow-md space-y-2">
            <h1 className="text-xs md:text-sm text-gray-400">21 oktober ontvangen, 22:05</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-sm md:text-lg font-bold">T-Mobile</h1>
              <img src={C} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <div className="w-10 h-10 bg-gray-300"></div>
              <p className="text-gray-400">Mobile abonnement</p>
              <p className="text-gray-400">1 stuks</p>
              <p className="font-bold">€40,-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <button className="bg-orange text-white rounded-md p-1 px-5">Bekijk</button>
              <p className="font-bold">Totaal factuur</p>
              <p className="font-bold">€40,-</p>
            </div>
            <div className="flex justify-between items-center">
              <IoShareSocialOutline className="text-2xl" />
              <button className="bg-orangedark text-white rounded-lg p-1">Naar boekhouding</button>
              <button className="bg-gray-300 text-white rounded-md p-1">Naar project</button>
            </div>
          </div>

          {/* 3rd Card */}
          <div className="border-2 rounded-2xl p-5 bg-white border-orange shadow-md space-y-2">
            <h1 className="text-xs md:text-sm text-gray-400">21 oktober ontvangen, 22:05</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-sm md:text-lg font-bold">T-Mobile</h1>
              <img src={C} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <div className="w-10 h-10 bg-gray-300"></div>
              <p className="text-gray-400">Mobile abonnement</p>
              <p className="text-gray-400">1 stuks</p>
              <p className="font-bold">€40,-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-medium">
              <button className="bg-orange text-white rounded-md p-1 px-5">Bekijk</button>
              <p className="font-bold">Totaal factuur</p>
              <p className="font-bold">€40,-</p>
            </div>
            <div className="flex justify-between items-center">
              <IoShareSocialOutline className="text-2xl" />
              <button className="bg-orangedark text-white rounded-lg p-1">Naar boekhouding</button>
              <button className="bg-gray-300 text-white rounded-md p-1">Naar project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionE;
