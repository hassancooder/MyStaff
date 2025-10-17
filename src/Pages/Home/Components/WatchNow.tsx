import React, { useState } from "react";
interface ChildProps {
  showText: boolean;
}
const WatchNow: React.FC<ChildProps> = ({ showText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="w-full relative z-60">
      {/* ===== Thumbnail with Play Button ===== */}
      <div className="relative w-full">
        <img
          src="./thumbnail-watchnow.webp"
          className="w-full h-full"
          alt="Thumbnail"
        />
        <img
          src="./watchnow-btn.webp"
          onClick={handleOpen}
          className="w-auto h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform"
          alt="Watch Now Button"
        />
        {showText ? (
          <b className="text-white font-bold absolute top-[92%] left-[10%] transform -translate-x-[2%]">
            Life saving, Time saving, Resource saving app.
          </b>
        ) : null}
      </div>

      {/* ===== Popup Modal ===== */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-5xl font-bold hover:text-gray-300 z-50 cursor-pointer "
          >
            &times;
          </button>

          {/* Video Player */}
          <div className="w-[90%] max-w-4xl relative z-50">
            <video
              src="./watchnow.mp4"
              controls
              autoPlay
              className="w-full rounded-lg z-50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchNow;
