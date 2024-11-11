"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#151826] text-white lg:py-32 md:py-20 px-4 overflow-hidden h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute rounded-full bg-gradient-to-r from-purple-700 to-pink-500 opacity-20 w-[600px] h-[600px] -left-40 top-20"
          style={{ filter: "blur(200px)" }}
        ></div>
        <div
          className="absolute rounded-full bg-gradient-to-r from-purple-700 to-pink-500 opacity-10 w-[400px] h-[400px] -right-20 top-1/4"
          style={{ filter: "blur(150px)" }}
        ></div>
      </div>

      <div className="relative max-w-screen-lg mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Transform Your Vision Into <br className="hidden md:block" />
          Reality With{" "}
          <span className="text-transparent bg-clip-text animate-gradient-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
            CodeGlax Experts Software Solutions
          </span>
        </h1>
        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We provide expert software solutions to turn your ideas into powerful
          digital results, innovation, reliability, and customized solutions to
          enhance your business success.
        </p>
        {/* Call to Action Button with Animated Gradient */}
        <button className="inline-flex items-center animate-gradient-bg px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-white">
          Contact For Consultation!
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Tailwind CSS Custom Animation */}
      <style jsx>{`
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }

        @keyframes gradientBg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-image: linear-gradient(
            to right,
            #8b5cf6,
            #ec4899,
            #fbbf24
          );
          background-size: 200% 200%;
          animation: gradientBg 4s ease infinite;
          border: none;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
