import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#151826] text-gray-400 py-12 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold my-10">
          Trusted by enterprises and high-growth startups worldwide
        </h2>
        {/* Statistics */}
        <div className="flex flex-col md:flex-row justify-center gap-12 my-12">
          <div>
            <h3 className="text-4xl font-bold mb-2">25+</h3>
            <p className="text-gray-400">Available technology professionals</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">20+</h3>
            <p className="text-gray-400">
              Happy clients from all over the world
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-gray-400">
              Deliver project and long-term partnerships
            </p>
          </div>
        </div>
        {/* Logo with Animated Gradient */}
        <div className="flex justify-center">
          <span className="text-transparent bg-clip-text animate-gradient-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-5xl font-extrabold">
            CodeGlax
          </span>
        </div>
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
      `}</style>
    </section>
  );
};

export default StatsSection;
