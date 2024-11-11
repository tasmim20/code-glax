import Image from "next/image";
import React from "react";

const ResearchCaseStudies = () => {
  const posts = [
    {
      title: "The Most Popular UI/UX and Product Design Tools in 2024",
      description:
        "As of 2024, Figma, Adobe XD, Sketch, and Webflow are leading the charge in UI/UX and product design. Figma...",
      imageUrl:
        "https://nexlent.com/_next/image?url=https%3A%2F%2Fnexlent-storage.s3.amazonaws.com%2Fblogs%2Ffc2bd4cb-541c-427d-8fa7-bb8474c78019.jpg&w=640&q=75", // Replace with your image path
      date: "Jun 30, 2024",
      readTime: "3 min read",
    },
    {
      title: "How to Choose Your Next CMS: A Guide for Businesses",
      description:
        "A CMS not only impacts your website’s performance and usability but also determines how efficiently your team...",
      imageUrl:
        "https://nexlent.com/_next/image?url=https%3A%2F%2Fnexlent-storage.s3.amazonaws.com%2Fblogs%2F775e0fe0-774c-4621-bb1d-6a1141583279.webp&w=640&q=75", // Replace with your image path
      date: "Sep 4, 2024",
      readTime: "5 min read",
    },
    {
      title: "What is a Tech Stack and Why is it Important for Website and...",
      description:
        "A tech stack (short for technology stack) is a combination of technologies, programming languages...",
      imageUrl:
        "https://nexlent.com/_next/image?url=https%3A%2F%2Fnexlent-storage.s3.amazonaws.com%2Fblogs%2F1f408c8e-f4a6-4acf-81da-b4ac61d2fd2a.png&w=640&q=75", // Replace with your image path
      date: "Sep 10, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-20  ">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className=" mb-8">
          <h2 className="text-5xl font-semibold mb-4 text-gray-200">
            Research & Case Studies
          </h2>
          <p className=" text-md md:text-base text-gray-400 mb-5">
            Sharing with the world, how we solve problems and our dedication to
            research <br /> and improve ourself to provide modern and
            sophisticated solutions.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className=" border-none overflow-hidden">
              <div className="relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-pink-500 text-gray-200 px-3 py-1 text-xs rounded">
                  # FRONTEND DEVELOPMENT
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-lg md:text-xl text-gray-300 font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {post.description}
                </p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <a
                    href="#"
                    className="flex items-center text-pink-500 hover:text-pink-400"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <span className="text-xs md:text-sm">
                    {post.date} • {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCaseStudies;
