import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-3 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-1">Fithub</h2>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <p className="text-sm">Phone: +123 456 789</p>
          <p className="text-sm">Email: info@fithub.com</p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm text-center">Follow us:</p>
          <div className="flex justify-center md:justify-end mt-2">
            <a href="#" className="text-white mx-2 hover:text-gray-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white mx-2 hover:text-gray-500">
              <RiTwitterXLine />
            </a>
            <a href="#" className="text-lg text-white mx-2 hover:text-gray-500">
              <IoLogoInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
