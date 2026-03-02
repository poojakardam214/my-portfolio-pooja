"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import VerticleProjectCard from "../Cards/VerticleProjectCard";
import FirstProject from "../../assets/images/next-web.png";
import SecProject from "../../assets/images/ccil.png";
import ThreProject from "../../assets/images/rrr.png";
import FourProject from "../../assets/images/alstone.png";
import FiveProject from "../../assets/images/sepak.png";
import sixProject from "../../assets/images/smc.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import HeartApp from "../../assets/images/heart.png";
import HondaApp from "../../assets/images/honda.png";
import KhoApp from "../../assets/images/kho.png";
import osheImage from "../../assets/images/admin.jpg";

interface Project {
  id: number;
  image: StaticImageData | string;
  title: string;
  description: string;
  link: string;
}

const WebsiteWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Website" | "Admin Panel" | "Mobile App"
  >("Website");

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const websiteProjects: Project[] = [
    {
      id: 1,
      image: FirstProject,
      title: "Zeacloud – Enterprise Server Solutions",
      description:
        "Built with **Next.js & Tailwind CSS**, this high-performance platform powers Zeacloud’s enterprise-grade server and cloud infrastructure business. Designed for scalability, lightning-fast load times, and robust performance.",
      link: "https://www.zeacloud.com",
    },
    {
      id: 2,
      image: FourProject,
      title: "Alstone ALcomb – Aluminium Honeycomb Panels",
      description:
        "Engineered with **PHP, HTML & CSS**, this site introduces Alstone’s cutting-edge Aluminium Honeycomb Panel (AHP) line, reinforcing their position in the cladding industry.",
      link: "https://alstonealcomb.com/",
    },
    {
      id: 3,
      image: sixProject,
      title: "SMC – Finance & Insurance Solutions",
      description:
        "Built with **PHP & Bootstrap**, this corporate website streamlines lead generation and client engagement for a major finance and insurance provider.",
      link: "https://www.smcfinance.com/",
    },
    {
      id: 4,
      image: SecProject,
      title: "CCIL – National Flooring Leader",
      description:
        "Developed a corporate site for CCIL using **PHP, HTML, CSS & JavaScript**, showcasing their premium flooring solutions and nationwide operations.",
      link: "https://ekant.in/ccil",
    },
  ];

  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton && indicatorRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const parentRect =
        activeButton.parentElement!.getBoundingClientRect();

      gsap.to(indicatorRef.current, {
        x: buttonRect.left - parentRect.left,
        width: buttonRect.width,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [activeTab]);

  return (
    <section
      id="MyWork"
      className="py-16 sm:py-20 lg:py-24 bg-white rounded-3xl shadow-lg overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            <span className="relative">My Works</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-wrap sm:flex-nowrap justify-between gap-2 sm:gap-0 mb-10 bg-gray-100 border border-gray-200 p-2 max-w-xl mx-auto rounded-full overflow-x-auto">

          <div
            ref={indicatorRef}
            className="absolute top-2 bottom-2 bg-white border border-gray-300 shadow-md rounded-full"
            style={{ left: 0, width: 0 }}
          />

          {["Website", "Admin Panel", "Mobile App"].map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              onClick={() =>
                setActiveTab(tab as "Website" | "Admin Panel" | "Mobile App")
              }
              className={`relative z-10 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold whitespace-nowrap transition ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Website Grid */}
        {activeTab === "Website" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
            {websiteProjects.map((project) => (
              <VerticleProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}

        {/* Admin Panel Grid */}
        {activeTab === "Admin Panel" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((_, i) => (
              <Link key={i} href="">
                <Image
                  src={osheImage}
                  alt="oshepro"
                  className="rounded-lg w-full h-auto"
                />
              </Link>
            ))}
          </div>
        )}

        {/* Mobile App Grid */}
        {activeTab === "Mobile App" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[HeartApp, HondaApp, KhoApp, KhoApp].map((img, i) => (
              <Link key={i} href="">
                <Image
                  src={img}
                  alt="oshepro"
                  className="rounded-lg w-full h-auto"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WebsiteWork;