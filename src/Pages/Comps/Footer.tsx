import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black py-5 h-auto w-full">
        <div className="container mx-auto text-center px-4 text-white">
          <Link
            to="/accessibility-statement"
            className="text-md hover:underline text-center text-white font-medium"
          >
            Accessibility Statement
          </Link>{" "}
          |{" "}
          <Link
            to="/privacy-policy"
            className="text-md hover:underline text-center text-white font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
      <footer
        id="contact"
        className="bg-black border-t-2 border-gray-400 text-white pt-4 pb-6 h-auto w-full"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-md font-bold sm:text-lg">
              © 2025 Diligram. All rights reserved.
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
