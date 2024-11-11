/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            People <span className="text-pink-500">Loves Us</span>
          </h2>
          <p className="text-gray-300">
            We are happy to share our joy of achievements here to win your heart
            and trust. Let's Connect!
          </p>
        </div>

        {/* Image and Video Overlay */}
        <div className="mb-12">
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              width={1200}
              height={675}
              src="/path/to/your/image.jpg"
              alt="Nexient background"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197 1.797a1 1 0 01-1.55-.866V9.908a1 1 0 011.55-.866l3.197 1.797a1 1 0 010 1.732z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5C6.753 4.5 2.5 8.753 2.5 14c0 5.246 4.253 9.5 9.5 9.5s9.5-4.254 9.5-9.5c0-5.247-4.253-9.5-9.5-9.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="mb-4 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 12l-3-3 1.5-1.5L9 9.667l6-6L18 6l-9 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              100% Client Satisfaction
            </h3>
            <p className="text-gray-400">
              Achieving 100% Client Satisfaction with top-quality service,
              personalized care, and a commitment to exceeding client
              expectations every time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="mb-4 text-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.707 11.293a1 1 0 010 1.414L4.414 17H7a1 1 0 110 2H3a1 1 0 01-1-1v-4a1 1 0 112 0v2.586l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Certified IT Professionals
            </h3>
            <p className="text-gray-400">
              Our team of certified IT professionals ensures top-notch project
              execution using SMART methodologies, delivering reliable and
              innovative solutions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="mb-4 text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Excellent Communication
            </h3>
            <p className="text-gray-400">
              Experience seamless technical and business communication with our
              dedicated support personnel, available to assist you at no
              additional cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
