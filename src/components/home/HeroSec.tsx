import Image from "next/image";
import React from "react";
import ProfileImg from "../../assets/images/poojaimg.png";
import StarsBackground from "./StarBackground";

const HeroSec = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#0f172a] 
    min-h-screen lg:min-h-[90vh] md:min-h-[45vh] py-15 md:py-10 lg:pt-0">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-transparent to-purple-900/40"></div>

      <StarsBackground />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* IMPORTANT CHANGE: 2 column only on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 
          p-6 md:p-10 rounded-3xl shadow-xl text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold leading-tight mb-6 text-white">

              Hey there! <br />
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                Pooja Kardam
              </span>
              <br />

              <span className="bg-sky-700/70 backdrop-blur-md 
              px-4 py-2 rounded-full inline-block mt-4 
              text-sm sm:text-base md:text-lg">
                UI/UX Designer
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 
            mb-8 text-base md:text-lg leading-relaxed">
              UI/UX Designer with 3+ years of experience crafting intuitive,
              user-centered digital experiences. Blending design creativity
              with front-end skills to build functional and visually compelling interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 
            justify-center lg:justify-start">
              <a
                href="#MyWork"
                className="bg-gradient-to-r from-sky-500 to-purple-500 
                px-8 py-3 rounded-full text-white font-semibold 
                hover:scale-105 transition duration-300 
                w-full sm:w-auto text-center"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="border border-sky-400 px-8 py-3 rounded-full 
                text-sky-400 font-semibold hover:bg-sky-500 
                hover:text-white transition duration-300 
                w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-12 lg:mt-0">
            <Image
              src={ProfileImg}
              alt="Pooja Kardam"
              className="w-[240px] h-[240px] 
              md:w-[300px] md:h-[300px] 
              lg:w-[360px] lg:h-[360px] 
              object-cover rounded-full 
              border-4 border-sky-500 shadow-2xl 
              hover:scale-105 transition duration-500"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSec;