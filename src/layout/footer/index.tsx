"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import ContactVector from "../../assets/images/admin.jpg"; 
import VertorImage from "../../assets/images/vector-profile.png"; // Adjust the path as necessary"
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <section className="  py-16 px-6 lg:px-16 relative">
        {/* <Image src={VertorImage} alt="vector" loading="lazy" className="absolute bottom-0 w-[20%] -left-12 drop-shadow-base" /> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="flex flex-col items-start space-y-6 pl-8  ">
            <h2 className="text-4xl font-bold text-white">Hey there</h2>
         
          <p className="text-white text-lg">
            Let’s start a conversation. Reach out via phone, email, or the form.
          </p>


          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-lg" />
              <span className="text-white text-sm">
                <Link href="tel:+919045458315">+91 90454 58315</Link>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white text-lg" />
              <span className="text-white text-sm">  
                <Link href="mailto:poojakardam214@gmail.com">poojakardam214@gmail.com</Link>
              </span>

              
            </div>
             <div className="flex items-center gap-3">
              <FaLocationArrow className="text-white text-lg" />
              <span className="text-white text-sm">  
                <Link href="#">Pilkhuwa Ghazaibad 245304 UP</Link>
              </span>
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
