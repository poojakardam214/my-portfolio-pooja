import Image from "next/image";
import React from "react";
import ProfileImg from "../../assets/images/poojaimg.png";
import StarsBackground from "./StarBackground"; 
const HeroSec = () => {
  return (
   <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090d16] py-16 lg:py-0">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Stars / Background Effect */}
      <StarsBackground />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Available for new projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Crafting Digital <br />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Experiences & Interfaces
              </span>
            </h1>

            {/* Intro Subtitle */}
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I&apos;m <span className="text-white font-semibold">Pooja Kardam</span> — a UI/UX Designer with <span className="text-sky-400 font-medium">4.5 of experience</span> crafting intuitive, user-centered digital products. I blend creative visual design with front-end thinking.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center">
              <a
                href="#MyWork"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium hover:opacity-95 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 text-center"
              >
                View Selected Work
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image Column with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              
              {/* Outer Glow Ring Behind Image */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 opacity-50 blur-xl group-hover:opacity-80 transition duration-500" />

              {/* Profile Image Frame */}
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-white/20 p-2 bg-[#0f172a]">
                <Image
                  src={ProfileImg}
                  alt="Pooja Kardam - UI/UX Designer"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="absolute -bottom-2 -left-4 sm:left-0 bg-slate-900/80 border border-white/10 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold text-sm">
                  4+
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-sm font-semibold text-white">4.5 Years</p>
                </div>
              </div>

              {/* Floating Badge 2: Specialty */}
              <div className="absolute top-6 -right-4 sm:right-0 bg-slate-900/80 border border-white/10 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 text-xs font-bold">
                  🎨
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Specialty</p>
                  <p className="text-sm font-semibold text-white">UI/UX & Web</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSec;