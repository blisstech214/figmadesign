import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiFilter } from "react-icons/fi";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import A from "../../../assets/A.png";
import B from "../../../assets/B.png";
function Footer() {
  return (
    <div className="flex">
      <div className="bg-orangedark lg:block md:block sm:hidden hidden p-10 inline-block h-screen">
        <div className="text-white list-none space-y-16">
          <li className="flex  gap-10">
            <RiHome2Line className="text-2xl" />
            <h1 className="text-sm md:text-base">Home</h1>
          </li>

          <li className="flex gap-10">
            <IoArrowRedoOutline className="text-2xl transform rotate-90 hover:rotate-360 transition-transform duration-500" />
            <h1 className="text-sm md:text-base">Inbox</h1>
          </li>

          <li className="flex gap-10">
            <IoArrowUndoOutline className="text-2xl transform rotate-90 hover:rotate-360 transition-transform duration-500" />
            <h1 className="text-sm md:text-base">Outbox</h1>
          </li>

          <li className="flex gap-10">
            <IoMdContact className="text-2xl" />
            <h1 className="text-sm md:text-base">Profile</h1>
          </li>

          <li className="flex gap-10">
            <SiGnuprivacyguard className="text-2xl" />
            <h1 className="text-sm md:text-base">Privacy</h1>
          </li>
          <li className="py-10 gap-10">
            <h1 className="text-lg p-3 bg-white text-center  px-6 hover:outline-double hover:outline-white text-orange  rounded-lg transition-all hover:bg-orange hover:text-white">
              +
            </h1>
            <h1 className="text- text-center md:text-base">Factuur</h1>
          </li>
        </div>
      </div>
      <div>
        <div className="w-full">
          <div className="flex gap-20  items-center justify-center px-10 py-5">
            <h1 className="text-lg md:font-semibold">Inbox Total</h1>
            <h1 className="text-xl font-bold">€150,-</h1>
           
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
              {/* 3 Card */}
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
                  <li className="">
                    <img src={A} />
                  </li>
                  <li className="text-black font-bold">Bouwmaat Haarlem</li>
                  <li className="text-gray-300">1</li>
                  <li className="text-black font-bold">€150,-</li>
                </p>
                <hr />
              </div>

              {/* 4 Card */}
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
                  <li className="">
                    <img src={B} />
                  </li>
                  <li className="text-black font-bold">
                    houten balken
                    <br />
                    138*38mm
                  </li>
                  <li className="text-gray-300">2 stucks</li>
                  <li className="text-black font-bold">€150,-</li>
                </p>
                <hr />
              </div>
              {/* 5 Card with Camera Icon */}
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
                  <li className="w-10 h-10 bg-gray-200 flex justify-center items-center">
                    {/* <IoMdCamera className="text-gray-400 text-3xl" /> */}
                  </li>
                  <li className="text-black font-bold">renovatie badkamer</li>
                  <li className="text-gray-300">1</li>
                  <li className="text-black font-bold">€150,-</li>
                </p>
                <hr />
              </div>
              {/* six Card with Camera Icon */}
              <div className="bg-white space-y-3 px-5 p-3 border-2 rounded-xl">
                <h1 className="text-orangedark font-bold">
                  wat zou je fghhf toegevoged zien ?
                </h1>
                <p className="p-5 text-gray-300">
                  gwkhdler6mn hioir uouulit kpkpriofe ewyitjrgr joidjiwoeqwl
                  hgvewrmwnr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;