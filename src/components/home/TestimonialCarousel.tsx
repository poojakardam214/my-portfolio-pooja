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
    <section className="py-[80px] bg-white">
      <div className="container mx-auto">
       <div className="text-center">
         <h2 className="text-4xl font-bold text-center mb-12 title-stript-right-down text-white ">
          <span className="relative">Testimonials</span>
        </h2>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TestinonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
