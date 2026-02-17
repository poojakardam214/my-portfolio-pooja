"use client";
import HeroSec from "@/components/home/HeroSec";
import MySkills from "@/components/home/MySkills";
import TestimonialsCarousel from "@/components/home/TestimonialCarousel";
import WebsiteWork from "@/components/home/WebsiteWork";
import WorkExperience from "@/components/home/WorkExperiance";
import Footer from "@/layout/footer";
import DesktopHeader from "@/layout/header/DesktopHeader";

export default function Home() {
  return (
    <>
      <DesktopHeader />
      <HeroSec />
      <WebsiteWork />
      <MySkills />
      <TestimonialsCarousel />
      <WorkExperience />
      <Footer />
    </>
  );
}
