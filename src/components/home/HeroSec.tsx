import Image from "next/image";
import React from "react";
import ProfileImg from "../../assets/images/poojaimg.png"; // Adjust the path as necessary
import StarsBackground from "./StarBackground";
const HeroSec = () => {
  return (
    <section className="h-screen relative flex items-center px-5">
      <div className="absolute w-[80%] h-[40vh] bg-sky-500 opacity-35 top-1/2 left-1/2 -translate-1/2 rounded-full  blur-3xl" />
      <StarsBackground />
      <div className="container mx-auto relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-maven-pro text-white">
              Hey there! <br />
              I&apos;m <span className="text-sky-400">Pooja Kardam</span>
              <br />
              <span className="bg-sky-700 px-4 py-2 rounded-full inline-block mt-3 text-lg">
                UI/UX Designer
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mb-8 font-open-sans">
              Crafting intuitive experiences where every pixel matters and every
              click feels right. Based in{" "}
              <span className="text-sky-400 font-semibold">Ghaziabad</span>.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4">
              <a
                href="#MyWork"
                className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full text-white font-semibold transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-sky-500 px-6 py-3 rounded-full text-sky-400 font-semibold hover:bg-sky-500 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="flex justify-center">
            <Image
              src={ProfileImg}
              alt="Zuaib Khan"
              className="w-120 h-120 object-cover rounded-full border-4 border-sky-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
