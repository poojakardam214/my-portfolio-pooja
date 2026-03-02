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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
          text-center mb-12 sm:mb-16 text-white"
        >
          My Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillData.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="bg-gray-800/70 backdrop-blur-md border border-gray-700 
              rounded-2xl p-6
              shadow-lg
              transition-all duration-300
              hover:shadow-2xl
              hover:-translate-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <span className="text-xl sm:text-2xl flex-shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 break-words">
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