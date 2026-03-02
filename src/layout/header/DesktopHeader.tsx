"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Profile from "@/assets/images/pk.logo.png";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const DesktopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-700 bg-[#0f172a] sticky top-0 z-50">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          <Image
            src={Profile}
            className="w-[50px] h-[50px] rounded-full border border-gray-500"
            alt="profile"
            priority
          />
          <div>
            <h6 className="text-sm font-semibold text-white">
              Pooja Kardam
            </h6>
            <p className="text-xs text-gray-400 flex items-center gap-2 mt-1">
              <span className="w-[6px] h-[6px] bg-blue-400 rounded-full animate-ping"></span>
              Open for work
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-gray-300">
          <li>
            <Link href="#" className="hover:text-sky-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#MyWork" className="hover:text-sky-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-sky-400 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Resume Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="/poojakardam-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-sky-500 px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-sky-600 transition">
              <BsArrowUpRight /> Resume
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-700 px-5 py-6 space-y-5 text-gray-300">
          <Link href="#" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">
            Home
          </Link>
          <Link href="#MyWork" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">
            Projects
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">
            About
          </Link>

          <a
            href="/poojakardam-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-sky-500 py-2 rounded-full text-white font-semibold flex justify-center items-center gap-2 hover:bg-sky-600 transition">
              <BsArrowUpRight /> Resume
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default DesktopHeader;