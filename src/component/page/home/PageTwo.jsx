import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import A from "../../../assets/A.png";
import C from "../../../assets/logoT.png";

import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
function PageTwo() {
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
          {/* <h1 className="text-lg text-zinc-400">gisteren</h1> */}
          <h1 className="text-xl text-orangedark font-bold">
            <FiFilter className="" />
          </h1>
        </div>

        <div className="bg-white p-5 space-y-5">
          <div className="flex justify-end space-y-3 items-center">
            <h1 className="text-orangedark text-2xl flex items-center font-bold">
              <HiOutlineBars2 />
            </h1>
          </div>
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={A} />
            </li>
            <li className="text-black font-bold">
              Bouwmaat Haarlem <br />
              <span className="text-gray-300 font-normal">totaal facturen</span>
            </li>
            <li className="text-gray-300">4</li>
            <li className="text-black font-bold">€1.302,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={A} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                21 oktober ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€150,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={A} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                21 september ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€12,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={A} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                11 january ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€550,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={A} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                01 january ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€660,-</li>
          </p>
          <hr />
        </div>
        <div className="bg-white p-5 space-y-5">
          <div className="flex justify-end space-y-3 items-center">
            <h1 className="text-orangedark text-2xl flex items-center font-bold">
              <HiOutlineBars2 />
            </h1>
          </div>
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={C} />
            </li>
            <li className="text-black font-bold">
              T- Mobile <br />
              <span className="text-gray-300 font-normal">totaal facturen</span>
            </li>
            <li className="text-gray-300">2</li>
            <li className="text-black font-bold">€80,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={C} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                21 oktober ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€50,-</li>
          </p>
          <hr />
          <p className="md:text-lg list-none font-medium text-sm flex justify-between items-center">
            <li className="">
              <img src={C} />
            </li>
            <li className="text-black font-bold">
              <span className="text-gray-300 font-normal">
                21 september ontvangen ,22:05
              </span>
              <br />
              Bouwmaat Haarlem
            </li>
            <li className="text-gray-300">1</li>
            <li className="text-black font-bold">€40,-</li>
          </p>
          <hr />

          <hr />
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
