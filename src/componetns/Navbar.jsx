import React, { useState } from "react";
import image from "/img.png"; // Update with your logo path
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed lg:text-xl top-0 left-0 w-full bg-black shadow-md z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <Link to="/">
              <img className="h-12 rounded-2xl w-12" src={image} alt="logo" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-10 text-white">
            <Link className="hover:text-blue-400" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-400" to="Technologies">
              Technologies
            </Link>
            <Link className="hover:text-blue-400" to="Projects">
              Projects
            </Link>
            <Link className="hover:text-blue-400" to="Experience">
              Experience
            </Link>
            <Link className="hover:text-blue-400" to="Education">
              Education
            </Link>
            <Link className="hover:text-blue-400" to="Certificates">
              Certificates
            </Link>
            <Link className="hover:text-blue-400" to="Contact">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex gap-5 text-white text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 bg-opacity-55 text-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-40`}
      >
        <div className="flex justify-between mb-4">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={toggleMenu} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            onClick={toggleMenu}
            to="/"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="Technologies"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Technologies
          </Link>
          <Link
            onClick={toggleMenu}
            to="Projects"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="Experience"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Experience
          </Link>
          <Link
            onClick={toggleMenu}
            to="Education"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Education
          </Link>
          <Link
            onClick={toggleMenu}
            to="Certificates"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Certificates
          </Link>
          <Link
            onClick={toggleMenu}
            to="Contact"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Contact
          </Link>

          <div className="flex justify-center gap-3 mt-4 text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
