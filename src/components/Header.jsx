import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="text-gray-600 body-font bg-green-300 shadow-sm">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">CryptMoji</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/encrypt"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Encryption🔒
          </Link>
          <Link
            to="/decrypt"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Decryption🔓
          </Link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
}

export default Header;
