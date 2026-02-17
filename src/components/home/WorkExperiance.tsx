"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * HOW TO USE (quick):
 * 1) Replace the placeholder imports below with your real screenshots.
 *    - For Sepaktakraw: take 3–6 screenshots (website, app, admin) and drop them in /assets/images
 * 2) Update the project objects (title, colors, links, images).
 * 3) Drop <CaseStudySection /> anywhere in your page.
 *
 * Notes:
 * - Uses GSAP for scroll-in animations.
 * - Fully responsive. Cards stack on mobile.
 * - Badges show scope: Website • App • Admin Panel.
 * - Minimal slider: arrows scroll a horizontal container. (No extra libs.)
 */

// 🔁 Replace these with your actual screenshots
// Sepaktakraw (replace with real files you add to your project)
import SepakWeb from "../../assets/images/sepak.png";      // Website screenshot
import SepakApp from "../../assets/images/kho.png";      // Mobile app screen (frame it if you want)
import SepakAdmin from "../../assets/images/admin.jpg";  // Admin panel

// Kho Kho (dummy; replace later)
import KhoWeb from "../../assets/images/sepak.png";
import KhoApp from "../../assets/images/kho.png";
import KhoAdmin from "../../assets/images/admin.jpg";

interface Project {
  title: string;
  subtitle: string;
  year: string;
  countries: number;
  badges: string[]; // ["Website", "App", "Admin Panel"]
  brand: {
    from: string; // gradient start
    to: string;   // gradient end
    accent: string; // border & highlight
  };
  shots: StaticImageData[]; // screenshots
  caseStudyUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sepaktakraw World Cup",
    subtitle: "Global tournament platform",
    year: "2025",
    countries: 25,
    badges: ["Website", "App", "Admin Panel"],
    brand: {
      from: "from-emerald-900/40",
      to: "to-emerald-700/20",
      accent: "emerald-400",
    },
    shots: [SepakWeb, SepakApp, SepakAdmin],
    caseStudyUrl: "https://sepak.gamesgms.com/", // optional external link
  },
  {
    title: "Kho Kho World Cup",
    subtitle: "End-to-end event ecosystem",
    year: "2025",
    countries: 25,
    badges: ["Website", "App", "Admin Panel"],
    brand: {
      from: "from-indigo-900/40",
      to: "to-violet-700/20",
      accent: "violet-400",
    },
    shots: [KhoWeb, KhoApp, KhoAdmin],
    caseStudyUrl: "#", // replace later
  },
];

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-3 py-1 rounded-full text-xs border border-white/20 bg-white/10 backdrop-blur-sm">
    {label}
  </span>
);

const CaseCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    gsap.set(el, { opacity: 0, y: 40 });
    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.9;
    node.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-3xl overflow-hidden p-1 shadow-2xl border border-white/10 bg-gradient-to-br ${project.brand.from} ${project.brand.to}`}
    >
      <div className="rounded-3xl bg-neutral-900/70 backdrop-blur-xl p-6 md:p-8">
        {/* Top Row: Title + Meta */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {project.title} <span className={`text-${project.brand.accent}`}>• {project.year}</span>
            </h3>
            <p className="text-neutral-300 text-sm md:text-base">{project.subtitle}</p>
            <p className="text-neutral-400 text-xs md:text-sm mt-1">{project.countries} countries participated</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        </div>

        {/* Shots scroller */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-neutral-900/80 to-transparent rounded-l-2xl" />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-neutral-900/80 to-transparent rounded-r-2xl" />

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2"
          >
            {project.shots.map((img, i) => (
              <div
                key={i}
                className="min-w-[78%] md:min-w-[45%] lg:min-w-[32%] snap-center"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/40">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <button
              onClick={() => scrollBy(-1)}
              className={`px-3 py-2 rounded-xl border text-sm bg-neutral-800/70 border-${project.brand.accent} hover:bg-neutral-800/90 transition`}
            >
              ◀
            </button>
            <button
              onClick={() => scrollBy(1)}
              className={`px-3 py-2 rounded-xl border text-sm bg-neutral-800/70 border-${project.brand.accent} hover:bg-neutral-800/90 transition`}
            >
              ▶
            </button>
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                className={`ml-2 px-4 py-2 rounded-xl border font-medium bg-transparent hover:bg-white/10 transition border-${project.brand.accent} text-${project.brand.accent}`}
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

const CaseStudySection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    // subtle parallax lights
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
    <section ref={rootRef} className="relative py-20 px-6 lg:px-12 bg-neutral-950 text-white overflow-hidden">
      {/* ambient background orbs */}
      <div className="bg-orb absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-emerald-800" />
      <div className="bg-orb absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-violet-800" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Case Studies</h2>
          <p className="text-neutral-300 mt-2">End-to-end delivery: Website • Mobile App • Admin Panel</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((p, i) => (
            <CaseCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
