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

  // Animate the sliding indicator when activeTab changes
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton && indicatorRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const parentRect = activeButton.parentElement!.getBoundingClientRect();

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
      className="py-20 bg-white rounded-4xl shadow-lg overflow-hidden"
      id="MyWork"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-center mb-10 title-stript-left-down text-white">
            <span className="relative">My Works</span>
          </h2>
        </div>

        {/* Static Tabs with GSAP indicator */}
        <div className="relative flex justify-between mb-8 bg-gray-100 border border-gray-200 p-2 max-w-xl mx-auto rounded-full">
          {/* Sliding indicator */}
          <div
            ref={indicatorRef}
            className="absolute top-2 bottom-2 bg-white border border-gray-300 shadow-md rounded-full"
            style={{ left: 0, width: 0 }}
          />

          <button
            ref={(el) => {
              tabRefs.current["Website"] = el;
            }}
            onClick={() => setActiveTab("Website")}
            className={`relative z-10 px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Website"
                ? "text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Website
          </button>

          <button
            ref={(el) => {
              tabRefs.current["Admin Panel"] = el;
            }}
            onClick={() => setActiveTab("Admin Panel")}
            className={`relative z-10 px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Admin Panel"
                ? "text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Admin Panel
          </button>

          <button
            ref={(el) => {
              tabRefs.current["Mobile App"] = el;
            }}
            onClick={() => setActiveTab("Mobile App")}
            className={`relative z-10 px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Mobile App"
                ? "text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Mobile App
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTab === "Website" &&
            websiteProjects.map((project) => (
              <VerticleProjectCard key={project.id} {...project} />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === "Admin Panel" && (
            <>
              <Link href="">
                <Image
                  src={osheImage}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
              <Link href="">
                <Image
                  src={osheImage}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
              <Link href="">
                <Image
                  src={osheImage}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {activeTab === "Mobile App" && (
            <>
              <Link href="">
                <Image
                  src={HeartApp}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
              <Link href="">
                <Image
                  src={HondaApp}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
              <Link href="">
                <Image
                  src={KhoApp}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>

              <Link href="">
                <Image
                  src={KhoApp}
                  alt="oshepro"
                  className="rounded-lg w-full"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebsiteWork;
