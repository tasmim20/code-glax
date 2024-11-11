/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import medal from "../../../../public/assets/medal.svg";
import process from "../../../../public/assets/agile-process.svg";

const AboutSection = () => {
  return (
    <section className=" text-white py-16 px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-2">About us</h3>
          <h2 className="text-5xl font-bold mb-4">
            CodeGlax: <span className="text-pink-500">Shaping the Future</span>
          </h2>
          <p className="text-gray-400 mb-4">
            We’re the people who are known for world-class agile product teams
            to scale your business.
          </p>
          <p className="text-gray-400 mb-8">
            At Code Glax, we are more than just a team; we are your dedicated
            partners in progress. With a profound expertise in software
            development, cloud services, WordPress development, and headless
            transformation, we are here to turn your aspirations into reality.
            Moreover, we go the extra mile by offering expert consultations on
            system designs and architecture. We don’t just build solutions; we
            architect success stories. Join us, and let's embark on a
            transformative journey together. Excellence is not an option; it's
            our commitment.
          </p>
          {/* Icons with Descriptions */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white text-black rounded-full flex items-center justify-center mt-1">
                {/* Example SVG/Icon */}
                <Image
                  src={medal}
                  alt="Design Icon"
                  className="w-12 h-12"
                  width={10}
                  height={20}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200">
                  Best Design Team
                </h4>
                <p className="text-gray-400">
                  We design modern digital products at scale
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                {/* Example SVG/Icon */}
                <Image
                  src={process}
                  alt="Agile Icon"
                  className="w-12 h-12"
                  width={10}
                  height={20}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200">
                  Agile Development Process
                </h4>
                <p className="text-gray-400">
                  Rapid software creation, frequent customer <br />{" "}
                  collaboration, and adaptable to change
                </p>
              </div>
            </div>
          </div>
          {/* Call to Action Button */}
          <button className="bg-[rgb(39,27,80)] hover:bg-[#31235e] text-blue-600 px-5 py-2 rounded-md font-medium flex items-center shadow-md transition-colors duration-300">
            Read more
            <span className="ml-2">→</span>
          </button>
        </div>
        {/* Right Image/Video Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-96 bg-[#1E1F2F] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/path/to/nexlent-image.png"
              alt="."
              className="w-full h-full object-cover"
              height={7}
              width={8}
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
