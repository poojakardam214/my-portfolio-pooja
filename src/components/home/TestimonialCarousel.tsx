import React from "react";
import Profile from "@/assets/images/profile.png";
import TestimonialCard from "../Cards/TestimonialCard";

const TestinonialData = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "This is the best service I have ever used! Highly recommend to everyone.",
    profileImage: Profile,
    designation: "Software Engineer at TechCorp",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Amazing experience! The team was professional and delivered on time.",
    profileImage: Profile,
    designation: "Product Manager at InnovateX",
  },
  {
    id: 3,
    name: "Alice Johnson",
    testimonial:
      "I loved the attention to detail and the quality of work. Will definitely use again!",
    profileImage: Profile,
    designation: "UX Designer at Creative Minds",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="relative">Testimonials</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TestinonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;