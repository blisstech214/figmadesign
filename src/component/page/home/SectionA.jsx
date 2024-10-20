import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import company from "../../../assets/first.jpg";
import { HiOutlineBars2 } from "react-icons/hi2";
import business from "../../../assets/mensenvrolijk 1.png";
import mail from "../../../assets/emailbox 1.png";
import mail2 from "../../../assets/factuurboxsymbool 1.png";
import tick from "../../../assets/tick.png";
import wrong from "../../../assets/wrong.png";
function SectionA() {
  return (
    <div className="">
      <div className="flex justify-between px-10 py-5">
        <h1 className="text-lg md:font-semibold">Inbox Total</h1>
        <h1 className="text-xl font-bold">€0,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-32 bg-orange">
          <h1>BTW aan</h1>
          <h1 className="w-7 h-7  bg-white flex items-center justify-center rounded-full">
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
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
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
              <h1 className="bg-green text-center inline-block p-2 rounded-2xl  text-white">
                Upload factuur
              </h1>
            </div>

            <h1 className="text-green  font-semibold text-base ">
              alle facturen zijn UBL proof en kun je doorsturen naar elk
              boekhoudpaket
            </h1>
          </div>

          {/* Second Card */}
          <div className="bg-white space-y-3 px-5 p-3 border-2 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-base md:text-xl font-bold text-blue">
                je factuurbox is de eerste Gratis conversie tool voor al je
                facturen
              </h1>
              <h1 className="text-blue text-2xl  flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <p className="md:text-lg font-medium text-sm">
              Ondernemers kunnen met de factuurbox<span className="text-green2"> honderden euroos conversiekosten besparen
              </span> op hun huidige boekhoudkosten......
              <span className="text-gray-400">lees meer</span>
            </p>
            <img
              className="w-full "
              src={business}
              alt="Business illustration"
            />
          </div>

          {/* Third Card */}

          <div className="bg-white space-y-3  p-3 border-2 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-base md:text-xl font-bold text-blue">
                Van mailbox naar Factuurbox
              </h1>
              <h1 className="text-blue text-2xl flex items-center font-bold">
                <HiOutlineBars2 />
              </h1>
            </div>
            <hr />
            <ul className="md:text-lg font-semibold text-sm text-green ml-5 list-disc disc-green">
              <li>AI je facturen zijn direct inzichtelijk</li>
              <li>Nooit meer in je mailbox zoeken naar facturen</li>
              <li>Alle aankopen en totaalbedragen zijn direct zichtbaar</li>
            </ul>

            <div className="grid grid-cols-2 justify-around p-5">
              <div className="relative flex items-center justify-center">
                {/* Wrong icon positioned with consistent margin */}
                <img
                  src={wrong}
                  className="absolute lg:top-2 lg:right-32 md:top-2 md:left-12 top-2 left-6 w-6 h-6" // Adjusted for consistent positioning
                  alt="Wrong icon"
                />
                <img className="p-4" src={mail} alt="Email box" />
              </div>
              <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-t from-liner to-white">
                {/* Tick icon positioned with consistent margin */}
                <img
                  src={tick}
                  className="absolute lg:top-2 lg:right-32 md:top-2  top-2 left-6 md:left-12 w-7 h-7" // Adjusted for consistent positioning
                  alt="Tick icon"
                />
                <img className="p-3" src={mail2} alt="Factuurbox symbol" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionA;
