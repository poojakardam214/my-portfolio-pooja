import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // react-icons

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  profileImage: StaticImageData;
  designation: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  testimonial,
  profileImage,
  designation,
}) => {
  return (
    <div
      className="
        relative
        bg-white
        p-6
        rounded-xl
        shadow-lg
        border
        border-gray-200
        transform
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-blue-500/30
        hover:rotate-1
      "
    >
      {/* Quotation Icon */}
      <div className="absolute -top-4 left-4 bg-blue-500 p-2 rounded-full shadow-md">
        <FaQuoteLeft className="text-white text-lg" />
      </div>

      {/* Profile Image */}
      <Image
        src={profileImage}
        alt={`${name}'s profile`}
        width={64}
        height={64}
        loading="lazy"
        className="w-16 h-16 rounded-full mb-4 mx-auto border-2 border-blue-500"
      />

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-4 text-center text-sm italic leading-relaxed">
        {testimonial}
      </p>

      {/* Name & Designation */}
      <h6 className="font-bold text-sm text-center text-gray-900">{name}</h6>
      <p className="text-gray-500 text-xs text-center">{designation}</p>
    </div>
  );
};

export default TestimonialCard;
