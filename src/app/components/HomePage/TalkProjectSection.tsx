/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const TalkProjectSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-gray-300 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
      {/* Left Side Image */}
      <div className="md:w-1/2 mb-6 md:mb-0 relative flex justify-center">
        {/* Background Accent */}
        <div className="absolute w-[100%] h-[100%] bg-purple-400 rounded-lg transform rotate-3 -z-10"></div>
        {/* Main Image */}
        <div className="relative rounded-md overflow-hidden ">
          <Image
            src="https://nexlent.com/images/home-cta.png"
            alt="Discussion"
            width={500}
            height={300}
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Let's Talk About{" "}
          <span className="text-pink-500">Your Next Project</span>
        </h2>
        <p className="text-gray-300 mb-6">
          Let's start a conversation! Our company is committed to building trust
          and fostering long-term relationships that benefit us both. Reach out
          to us now for a quick chat, and let's turn your ideas into reality
          together.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Discuss A Project
        </button>
      </div>
    </section>
  );
};

export default TalkProjectSection;
