"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Screenshots ---------------- */
// Replace with your real images
import SepakWeb from "../../assets/images/sepak.png";
import SepakApp from "../../assets/images/kho.png";
import SepakAdmin from "../../assets/images/admin.jpg";

import KhoWeb from "../../assets/images/sepak.png";
import KhoApp from "../../assets/images/kho.png";
import KhoAdmin from "../../assets/images/admin.jpg";

/* ---------------- Types ---------------- */

interface Project {
  title: string;
  subtitle: string;
  year: string;
  countries: number;
  badges: string[];
  brand: {
    gradient: string;
    accentText: string;
    accentBorder: string;
  };
  shots: StaticImageData[];
  caseStudyUrl?: string;
}

/* ---------------- Data ---------------- */

const projects: Project[] = [
  {
    title: "Sepaktakraw World Cup",
    subtitle: "Global tournament platform",
    year: "2025",
    countries: 25,
    badges: ["Website", "App", "Admin Panel"],
    brand: {
      gradient: "from-emerald-900/40 to-emerald-700/20",
      accentText: "text-emerald-400",
      accentBorder: "border-emerald-400",
    },
    shots: [SepakWeb, SepakApp, SepakAdmin],
    caseStudyUrl: "https://sepak.gamesgms.com/",
  },
  {
    title: "Kho Kho World Cup",
    subtitle: "End-to-end event ecosystem",
    year: "2025",
    countries: 25,
    badges: ["Website", "App", "Admin Panel"],
    brand: {
      gradient: "from-indigo-900/40 to-violet-700/20",
      accentText: "text-violet-400",
      accentBorder: "border-violet-400",
    },
    shots: [KhoWeb, KhoApp, KhoAdmin],
    caseStudyUrl: "#",
  },
];

/* ---------------- Badge ---------------- */

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-3 py-1 rounded-full text-xs border border-white/20 bg-white/10 backdrop-blur-sm">
    {label}
  </span>
);

/* ---------------- Case Card ---------------- */

const CaseCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.set(cardRef.current, { opacity: 0, y: 40 });

    const anim = gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });

    return () => anim.kill();
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollerRef.current) return;
    const width = scrollerRef.current.clientWidth;
    scrollerRef.current.scrollBy({
      left: dir * width * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-3xl overflow-hidden p-1 shadow-2xl border border-white/10 bg-gradient-to-br ${project.brand.gradient}`}
    >
      <div className="rounded-3xl bg-neutral-900/70 backdrop-blur-xl p-5 sm:p-6 md:p-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              {project.title}{" "}
              <span className={project.brand.accentText}>
                • {project.year}
              </span>
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              {project.countries} countries participated
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pb-2"
          >
            {project.shots.map((img, i) => (
              <div
                key={i}
                className="min-w-[85%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[32%] snap-center"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    sizes="(max-width: 640px) 85vw,
                           (max-width: 1024px) 45vw,
                           32vw"
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-end gap-2 mt-4">
            <button
              onClick={() => scrollBy(-1)}
              className={`px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-xl border bg-neutral-800/70 ${project.brand.accentBorder} hover:bg-neutral-800/90 transition`}
            >
              ◀
            </button>

            <button
              onClick={() => scrollBy(1)}
              className={`px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-xl border bg-neutral-800/70 ${project.brand.accentBorder} hover:bg-neutral-800/90 transition`}
            >
              ▶
            </button>

            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                className={`ml-2 px-3 sm:px-4 py-2 rounded-xl border font-medium bg-transparent hover:bg-white/10 transition ${project.brand.accentBorder} ${project.brand.accentText}`}
              >
                View live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Section ---------------- */

const CaseStudySection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lights = gsap.utils.toArray<HTMLElement>(".bg-orb");

    lights.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? 20 : -20,
        x: i % 2 === 0 ? -10 : 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={rootRef}
      className="container relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-neutral-950 text-white overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="bg-orb absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-emerald-800" />
      <div className="bg-orb absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-violet-800" />

      <div className="container mx-auto">
        <header className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-neutral-300 mt-2 text-sm sm:text-base">
            End-to-end delivery: Website • Mobile App • Admin Panel
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <CaseCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;