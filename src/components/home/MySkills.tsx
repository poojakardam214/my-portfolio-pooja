"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFigma, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiCanva,
  SiTailwindcss,
  SiNextdotjs,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
      { name: "Adobe XD", icon: <FaHtml5 className="text-pink-400" /> },
      { name: "Canva", icon: <SiCanva className="text-sky-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "React", icon: <FaReact className="text-sky-300" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    title: "Animation",
    skills: [
      { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    title: "Other",
    skills: [{ name: "Git", icon: <FaGitAlt className="text-orange-400" /> }],
  },
];

const MySkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector("h2"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white drop-shadow-lg">
          My Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-[1000px]">
          {skillData.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="relative bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 
              rounded-2xl p-5 sm:p-6 shadow-xl 
              transition-all duration-300 
              hover:shadow-2xl 
              lg:hover:-translate-y-2 
              lg:hover:rotate-x-3 
              lg:hover:rotate-y-3"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 pointer-events-none"></div>

              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white drop-shadow-md">
                {category.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-sm sm:text-base 
                    hover:translate-x-1 transition-transform"
                  >
                    <span className="text-xl sm:text-2xl">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MySkills;