import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-auto fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-4">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center" data-aos="fade-right">
            <img src="./logo.png" alt="Logo" className="w-24 h-auto" />
          </div>
          <nav
            className="hidden md:flex items-center space-x-6"
            data-aos="zoom-in"
          >
            <a
              href="#features"
              className="text-sm text-blue-600 hover:underline"
            >
              Features
            </a>
            <a
              href="#modules"
              className="text-sm text-blue-600 hover:underline"
            >
              Modules
            </a>
            <a
              href="#contact"
              className="text-sm text-blue-600 hover:underline"
            >
              Contact
            </a>
          </nav>
          <button
            className="md:hidden text-blue-600"
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
