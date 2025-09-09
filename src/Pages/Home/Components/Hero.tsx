import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ===== Detect screen size and iOS =====
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 700);
    };

    // Check if user is on iOS
    const userAgent = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===== Force Play on Safari Mobile =====
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video autoplay started ✅");
          })
          .catch((err) => {
            console.warn("Autoplay blocked, waiting for user interaction:", err);
            const handleUserInteraction = () => {
              video.play().catch((error) =>
                console.error("Manual play failed:", error)
              );
              document.removeEventListener("touchstart", handleUserInteraction);
            };
            document.addEventListener("touchstart", handleUserInteraction);
          });
      }
    }
  }, [isWideScreen, isIOS]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        key={`${isWideScreen}-${isIOS}`} // force re-render when screen size or iOS changes
      >
        {isIOS ? (
          // iOS Safari -> Always MP4
          <source
            src={
              isWideScreen
                ? "./home-desktop-video.mp4"
                : "./home-mobile-video.mp4"
            }
            type="video/mp4"
          />
        ) : (
          // Other browsers -> WebM first, then MP4 fallback
          <>
            <source
              src={
                isWideScreen
                  ? "./home-desktop-video.webm"
                  : "./home-mobile-video.webm"
              }
              type="video/webm"
            />
            <source
              src={
                isWideScreen
                  ? "./home-desktop-video.mp4"
                  : "./home-mobile-video.mp4"
              }
              type="video/mp4"
            />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-20 py-16 z-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white">
              A critical tool to support {isWideScreen ? <br /> : " "}
              <span className="font-semibold">frontline governance</span>
            </h2>

            <p className="text-base sm:text-md text-white font-medium mb-8 md:max-w-[56%] mx-auto md:mx-0">
              An award-winning AI driven platform redefining the way documents
              are managed and distributed for frontline workers.
            </p>

            <div className="flex md:justify-start justify-center">
              <button className="bg-blue-700 text-white text-medium max-w-[275px] text-[15px] font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                Try MyStaff App - See How It Works
              </button>
            </div>
          </div>
        </div>

        {/* ===== IMAGE IN BOTTOM RIGHT ===== */}
        <div className="absolute -bottom-20 lg:-bottom-40 right-0 p-6 sm:p-10">
          <img
            src="./diligram.png"
            alt="Bottom Right Decoration"
            className="w-24 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
