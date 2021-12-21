import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center flex-col w-full p-0 mx-auto mt-auto">
      <div className="mx-auto flex mt-4 text-gray-100">Eduardo Cordeiro</div>
      <div className="mx-auto flex mt-4 text-gray-100">agez0s@gmail.com</div>
      <div className="text-2xl mx-auto py-4 flex">
        <a href="https://github.com/agez0s" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/eduardo-cordeiro-/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
