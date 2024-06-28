import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 w-full py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-center md:text-left mb-4 md:mb-0">
            © 2024 Color Palette Generator | Created by{" "}
            <a
              href="https://github.com/ishaangupta-yb"
              className="underline hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              ishaangupta-yb
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ishaangupta-yb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ishaangupta1201"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

