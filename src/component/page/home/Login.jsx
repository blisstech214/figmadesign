import React from "react";
import google from "../../../assets/logobg.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const Click = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 bg-gray-100">
      <div className="w-full bg-bgcolor max-w-md rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl text-black font-bold text-center mb-2">
          maak een gratis account aan met je mailadres en verifieer je mailadres
        </h1>
        <h4 className="text-xs sm:text-sm text-center font-semibold text-black mb-4">
          en start direct met het vullen van je factuurbox
        </h4>

        <input
          type="email"
          placeholder="email address"
          className="w-full p-2 sm:p-3 mb-2 text-center rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />
        <h2 className="text-xs sm:text-sm text-center text-gray-400 mb-2">
          Wij sturen direct een verificatie naar je mailadres
        </h2>

        <div className="flex items-center justify-center mb-3">
          <input
            type="checkbox"
            id="checkbox1"
            className="h-4 w-4 mr-2 border-gray-300 checked:bg-orangedark rounded-sm  focus:ring-0"
          />
          <label htmlFor="checkbox1" className="text-xs sm:text-sm font-bold">
            Ik ga akkoord met de voorwaarden
          </label>
        </div>

        <button
          onClick={Click}
          className="w-full shadow-xl bg-orangedark text-white text-center p-2 sm:p-3 rounded-full mb-4 hover:bg-orange-600 transition-colors"
        >
          aanmelden
        </button>

        <h1 className="text-center text-xs sm:text-sm mb-2 font-bold">Of</h1>

        <div className="flex p-2 bg-slate-50 border-2 rounded-full outline-2 items-center justify-center gap-2 mb-4">
          <img
            src={google}
            alt="Google Logo"
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
          <h1 className="text-xs sm:text-sm font-semibold text-gray-500">
            Sign in with Google
          </h1>
        </div>

        <hr className="my-8" />
        <h1 className="text-black py-3 text-center font-bold text-xl sm:text-xl">
          Inloggen
        </h1>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 sm:p-3 rounded-xl mb-2 text-center  border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />
        <h2 className="text-xs text-center py-3 sm:text-sm text-gray-500 mb-2">
          We sturen direct een verificatie naar je mailadres
        </h2>

        <button className="w-full bg-blue  bg-blue-500 shadow-xl text-white text-center p-2 sm:p-3 rounded-full mb-4 hover:bg-blue-600 transition-colors">
          Inloggen
        </button>

        <h1 className="text-center text-xs sm:text-sm mb-2 font-bold">Of</h1>

        <div className="flex p-2 border-2 bg-slate-50 outline-2 items-center rounded-full justify-center gap-2 mb-4">
          <img
            src={google}
            alt="Google Logo"
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
          <h1 className="text-xs sm:text-sm text-gray-500 font-semibold">
            Sign in with Google
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
