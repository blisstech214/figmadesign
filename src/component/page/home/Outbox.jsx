
import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiFilter, FiSearch } from "react-icons/fi";
import B from "../../../assets/B.png";
import { HiOutlineBars2 } from "react-icons/hi2";
import square from "../../../assets/Rectangle 57.png";

function Outbox() {
  // Setting dynamic values using state
  const [totalAmount, setTotalAmount] = useState(3415);
  const [btw, setBtw] = useState(true);

  // Product data (could come from API or database)
  const products = [
    {
      id: 1,
      name: "Houten balken",
      size: "138*38mm",
      artnr: "123456",
      store: "bouwmaat haarlem",
      quantity: 3,
      price: 80,
    },
    {
      id: 2,
      name: "Houten balken",
      size: "138*38mm",
      artnr: "123456",
      store: "bouwmaat haarlem",
      quantity: 2,
      price: 150,
    },
    {
      id: 3,
      name: "Houten balken",
      size: "138*38mm",
      artnr: "123456",
      store: "bouwmaat haarlem",
      quantity: 1,
      price: 2000,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-row justify-between px-5 sm:px-10 py-5">
        <h1 className="text-sm sm:text-lg font-medium sm:font-semibold">inbox Total</h1>
        <h1 className="text-base sm:text-xl font-bold">€3.415,-</h1>
        <div className="flex justify-around items-center p-1 text-white rounded-full w-28 sm:w-32 bg-orange">
          <h1 className="text-xs sm:text-sm">BTW aan</h1>
          <h1 className="w-6 h-6 sm:w-7 sm:h-7 bg-white flex items-center justify-center rounded-full">
            <IoCheckmarkSharp className="text-blue text-xs sm:text-lg" />
          </h1>
        </div>
      </div>
      <div className="bg-bgcolor max-h-screen md:px-10 md:p-10 p-5 space-y-5">
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

        <div className="bg-white p-2 space-y-3">
          <div className="flex justify-between py-6">
            <h1 className="font-bold text-lg">Overzicht meest betaalde aankopen</h1>
            <h1 className="text-orangedark text-2xl flex items-center font-bold">
              <HiOutlineBars2 />
            </h1>
          </div>

          <div>
            {/* Dynamic product listing */}
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-medium"
              >
                {index === 0 ? (
                  <img src={B} alt="product" className="w-10 h-10" />
                ) : (
                  <img src={square} alt="product" className="w-10 h-10" />
                )}
                <div className="font-bold text-gray-300">
                  <h1 className="font-normal">
                    artnr.{product.artnr},<br /> gekocht bij {product.store}
                  </h1>
                  <h1 className="font-bold text-black">
                    {product.name}
                    <br />
                    {product.size}
                  </h1>
                </div>
                <p className="text-gray-300">{product.quantity}st</p>
                <p className="font-bold">€{product.price},-</p>
              </div>
            ))}
          </div>

          {/* Add margin-top to create whitespace between products and pagination */}
          <div className="p-0"> {/* Adjust this value as needed for more or less space */}
            <ul className="flex justify-between  p-8  items-center text-white text-sm">
              <li className="flex gap-0">
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {"<<"}
                </div>
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {"<"}
                </div>
              </li>
              <li className="flex gap-0">
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {"1"}
                </div>
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {"10"}
                </div>
              </li>
              <li className="flex gap-0">
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {">"}
                </div>
                <div className="w-10 h-10 px-2 bg-orangedark flex items-center justify-center rounded">
                  {">>"}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outbox;
