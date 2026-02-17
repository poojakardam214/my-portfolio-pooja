"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactVector from "../../assets/images/admin.jpg"; 
import VertorImage from "../../assets/images/vector-profile.png"; // Adjust the path as necessary"

const Footer: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16 relative">
        <Image src={VertorImage} alt="vector" loading="lazy" className="absolute bottom-0 w-[20%] -left-12 drop-shadow-base" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="flex flex-col items-start space-y-6 pl-8">
            <h2 className="text-4xl font-bold text-gray-900">Hey there</h2>
         
          <p className="text-gray-600 text-lg">
            Let’s start a conversation. Reach out via phone, email, or the form.
          </p>


          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-lg" />
              <span className="text-gray-700 text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-lg" />
              <span className="text-gray-700 text-sm">your@email.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Footer;
