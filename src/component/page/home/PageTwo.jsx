import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import A from "../../../assets/A.png";
import C from "../../../assets/logoT.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter, FiSearch } from "react-icons/fi";

function PageTwo() {
  // Set the default state to show all dropdown lists
  const [openDropdown, setOpenDropdown] = useState(
    Array.from({ length: 2 }, (_, index) => index) // Adjust length based on your items
  );

  // Toggle function for the dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index) // Remove index from state (hide)
        : [...prevState, index] // Add index to state (show)
    );
  };

  const items = [
    {
      logo: A,
      title: "Bouwmaat Haarlem",
      invoices: 4,
      total: "€1.302,-",
      transactions: [
        {
          date: "21 oktober ontvangen ,22:05",
          amount: "€150,-",
          count: 1,
        },
        {
          date: "21 september ontvangen ,22:05",
          amount: "€12,-",
          count: 1,
        },
        {
          date: "11 january ontvangen ,22:05",
          amount: "€550,-",
          count: 1,
        },
        {
          date: "01 january ontvangen ,22:05",
          amount: "€660,-",
          count: 1,
        },
      ],
    },
    {
      logo: C,
      title: "T-Mobile",
      invoices: 2,
      total: "€80,-",
      transactions: [
        {
          date: "21 oktober ontvangen ,22:05",
          amount: "€50,-",
          count: 1,
        },
        {
          date: "21 september ontvangen ,22:05",
          amount: "€40,-",
          count: 1,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">
          Inbox Total
        </h1>
        <h1 className="text-base sm:text-xl font-bold">€150,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>

      <div className="bg-bgcolor md:px-10 md:p-10 p-5 space-y-5">
        {/* Filter Options */}
        <div className="flex justify-around items-center">
          <h1 className="text-xl font-bold text-orangedark">terug</h1>
          <h1 className="text-lg text-orangedark">
            meest <br /> betaald
          </h1>
          <h1 className="text-xl text-gray-300">
            meest <br /> gekocht
          </h1>
          <h1 className="text-2xl font-bold text-orangedark">
            <FiSearch />
          </h1>
          <h1 className="text-2xl text-orangedark font-bold">
            <FiFilter />
          </h1>
        </div>

        {items.map((item, index) => (
          <div className="bg-white p-5 space-y-5" key={index}>
            {/* Default Content */}
            <div className="flex justify-between items-center">
              <ul className="md:text-lg list-none font-medium text-sm flex justify-between w-full">
                <li className="flex items-center space-x-10">
                  <img src={item.logo} alt={item.title} />
                  <div>
                    <h2 className="text-black font-bold">{item.title}</h2>
                    <span className="text-gray-300 font-normal">
                      totaal facturen
                    </span>
                  </div>
                </li>
                <li className="text-gray-400 py-5">{item.invoices}</li>
                <li className="text-black font-bold pr-16 py-5">
                  {item.total}
                </li>
              </ul>
              <h1 className="text-orangedark text-2xl flex items-center font-bold">
                <HiOutlineBars2 onClick={() => toggleDropdown(index)} />
              </h1>
            </div>
            <hr />

            {/* Dropdown Content */}
            {openDropdown.includes(index) && (
              <ul className="space-y-7">
                {item.transactions.map((transaction, tIndex) => (
                  <li
                    className="md:text-lg list-none font-medium text-sm flex justify-between items-center"
                    key={tIndex}
                  >
                    <li className="flex items-center space-x-10">
                      <img src={item.logo} alt={item.title} />
                      <div>
                        <span className="text-gray-400 font-normal">
                          {transaction.date}
                        </span>
                        <h2 className="text-black font-bold">{item.title}</h2>
                      </div>
                    </li>
                    <li className="text-gray-300">{transaction.count}</li>
                    <li className="text-black font-bold pr-20">
                      {transaction.amount}
                    </li>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageTwo;
