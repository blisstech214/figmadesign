import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

import A from "../../../assets/A.png";
import B from "../../../assets/B.png";
import C from "../../../assets/logoT.png";
function SectionE() {
  return (
    <div>
      <div>
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
              <div className="flex justify-center items-center gap-2">
                <h1 className="text-lg font-bold text-orangedark">vandaag </h1>

                <span className="w-6 h-6 text-white bg-orangedark flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <h1 className="text-lg text-zinc-400">gisteren</h1>
              <h1 className="text-xl text-orangedark font-bold">
                <FiFilter className="" />
              </h1>
            </div>

            {/* Cards Section: Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {/* First Card */}
              <div className="border-2 space-y-2 rounded-2xl p-5 bg-white border-orange shadow-md">
                <h1 className="text-sm md:text-base text-gray-300">
                  Net ontvangen, vandaag 12:05
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm md:text-lg font-bold">
                    Bouwmaat Haarlem
                  </h1>
                  <img src={A} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                  <img src={B} alt="product" className="w-10 h-10" />
                  <p className=" text-gray-300">
                    Houten balken
                    <br />
                    138*38mm
                  </p>
                  <p className="text-gray-300">2 stuks</p>
                  <p className="font-bold">€150,-</p>
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                  <button className="bg-orange text-white rounded-md p-1 px-5">
                    Bekijk
                  </button>
                  <p className="font-bold">Totaal factuur</p>
                  <p className="font-bold">€150,-</p>
                </div>
                <div className="flex justify-between items-center">
                  <IoShareSocialOutline className="text-2xl" />
                  <button className="bg-orangedark text-white rounded-lg p-1">
                    Naar boekhouding
                  </button>
                  <button className="bg-gray-300 text-white rounded-md p-1">
                    Naar project
                  </button>
                </div>
              </div>
              {/* 2 Card */}
              <div className="border-2 space-y-2 rounded-2xl p-5 bg-white border-orange shadow-md">
                <h1 className="text-sm md:text-base text-gray-300">
                  21 oktober ontvangen , 22:05
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm md:text-lg font-bold">T-Mobile</h1>
                  <img src={C} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                  <div className="w-10 h-10 bg-gray-300"></div>
                  <p className=" text-gray-300">
                    mobile abbonement 
                  </p>
                  <p className="text-gray-300">1 stuks</p>
                  <p className="font-bold">€40,-</p>
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                  <button className="bg-orange text-white rounded-md p-1 px-5">
                    Bekijk
                  </button>
                  <p className="font-bold">Totaal factuur</p>
                  <p className="font-bold">€40,-</p>
                </div>
                <div className="flex justify-between items-center">
                  <IoShareSocialOutline className="text-2xl" />
                  <button className="bg-orangedark text-white rounded-lg p-1">
                    Naar boekhouding
                  </button>
                  <button className="bg-gray-300 text-white rounded-md p-1">
                    Naar project
                  </button>
                </div>
              </div>

              {/* 3 Card */}
              <div className="border-2 space-y-2 rounded-2xl p-5 bg-white border-orange shadow-md">
                <h1 className="text-sm md:text-base text-gray-300">
                 21 oktober ontvangen , 22:05
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm md:text-lg font-bold">
                    T-Mobile
                  </h1>
                  <img src={C} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                <div className="w-10 h-10 bg-gray-300"></div>

                  <p className=" text-gray-300">
                   mobile abbonement 
                  </p>
                  <p className="text-gray-300">1 stuks</p>
                  <p className="font-bold">€40,-</p>
                </div>
                <hr />
                <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium">
                  <button className="bg-orange text-white rounded-md p-1 px-5">
                    Bekijk
                  </button>
                  <p className="font-bold">Totaal factuur</p>
                  <p className="font-bold">€40,-</p>
                </div>
                <div className="flex justify-between items-center">
                  <IoShareSocialOutline className="text-2xl" />
                  <button className="bg-orangedark text-white rounded-lg p-1">
                    Naar boekhouding
                  </button>
                  <button className="bg-gray-300 text-white rounded-md p-1">
                    Naar project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionE;
