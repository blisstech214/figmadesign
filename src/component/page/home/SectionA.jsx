import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import company from "../../../assets/first.jpg";
import { HiOutlineBars2 } from "react-icons/hi2";
import business from "../../../assets/mensenvrolijk 1.png";
import mail from "../../../assets/emailbox 1.png";
import mail2 from "../../../assets/factuurboxsymbool 1.png";
import tick from "../../../assets/tick.png";
import wrong from "../../../assets/wrong.png";
import { useState } from "react";
import SectionB from "./SectionB";
function SectionA() {
  const [showSectionB, setShowSectionB] = useState(false);

  const handleUploadClick = () => {
    setShowSectionB(true);
  };

  if (showSectionB) {
    return <SectionB />;
  }

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">
          inbox Total
        </h1>
        <h1 className="text-base sm:text-xl font-bold">€150,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-bgcolor px-5 sm:px-10 py-5 space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center text-sm sm:text-lg">
          <h1 className="font-bold text-orangedark">vandaag</h1>
          <h1 className="text-zinc-400">gisteren</h1>
          <h1 className="text-orangedark font-bold">
            <FiFilter />
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                {/* Button to trigger `handleUploadClick` */}
                <button
                  onClick={handleUploadClick} // Correctly trigger the parent
                  state
                  change
                  className="bg-green text-center p-2 sm:p-4 px-3
                  sm:px-5 rounded-2xl text-white text-xs sm:text-sm"
                >
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
          <div
            className="bg-white space-y-3 p-4 sm:p-5 border-2 rounded-xl cursor-pointer"
            onClick={handleUploadClick}
          >
            <div className="flex justify-between">
              <h1 className="text-sm sm:text-lg font-bold text-blue">
                je factuurbox is de eerste Gratis conversie tool voor al je
                facturen
              </h1>
              <HiOutlineBars2 className="text-blue text-xl" />
            </div>
            <hr />
            <p className="text-xs sm:text-sm md:text-lg font-medium">
              Ondernemers kunnen met de factuurbox
              <span className="text-green2">
                honderden euroos conversiekosten besparen
              </span>
              op hun huidige boekhoudkosten...
              <span className="text-gray-400">lees meer</span>
            </p>
            <img
              src={business}
              alt="Business illustration"
              className="w-full"
            />
          </div>

          {/* Third Card */}
          <div className="bg-white space-y-3 p-4 sm:p-5 border-2 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-sm sm:text-lg font-bold text-blue">
                Van mailbox naar Factuurbox
              </h1>
              <HiOutlineBars2 className="text-blue text-xl" />
            </div>
            <hr />
            <ul className="text-xs sm:text-base font-semibold text-green list-disc ml-5">
              <li>AI je facturen zijn direct inzichtelijk</li>
              <li>Nooit meer in je mailbox zoeken naar facturen</li>
              <li>Alle aankopen en totaalbedragen zijn direct zichtbaar</li>
            </ul>
            <div className="grid grid-cols-2 gap-3 p-5">
              <div className="relative">
                <img
                  src={wrong}
                  className="absolute top-2 left-2 w-5 sm:w-6"
                  alt="Wrong"
                />
                <img src={mail} className="p-4 w-full" alt="Email box" />
              </div>
              <div className="relative bg-gradient-to-t from-liner to-white rounded-2xl flex justify-center items-center">
                <img
                  src={tick}
                  className="absolute top-2 left-2 w-5 sm:w-6"
                  alt="Tick"
                />
                <img
                  src={mail2}
                  className="p-4 w-full"
                  alt="Factuurbox symbol"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionA;
