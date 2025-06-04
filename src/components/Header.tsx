import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute h-auto w-full top-0 py-3">
      <div className="container mx-auto px-0 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center" data-aos="fade-right">
            <img
              src="./white-logo.png"
              alt="Logo"
              className="w-32 md:w-40 h-auto"
            />
          </div>
          <nav
            className="hidden md:flex items-center space-x-6"
            data-aos="zoom-in"
          >
            <a href="#features" className="text-sm text-white hover:underline">
              Features
            </a>
            <a href="#modules" className="text-sm text-white hover:underline">
              Modules
            </a>
            <a href="#contact" className="text-sm text-white hover:underline">
              Contact
            </a>
            {/* <a
              href="https://www.diligram.com/about-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a> */}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded shadow-lg">
            <div className="flex flex-col space-y-3 px-4 py-4">
              <a
                href="#features"
                className="text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#modules"
                className="text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </a>
              <a
                href="#contact"
                className="text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              {/* <a
                href="https://www.diligram.com/about-us.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
