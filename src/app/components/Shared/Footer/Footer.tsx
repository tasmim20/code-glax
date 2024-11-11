import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151826] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Code Glax</h2>
          <p className="text-gray-400 mb-4">
            An industry-leading custom software development company for startups
            and enterprises, delivers with product design, development, and
            technology acceleration. Nexlent is a sister concern of FiKHSONS
            Group.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
            {/* Social Media Links (Example icons used) */}
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="mt-4">
            <p>
              <strong>Drop us a line:</strong>{" "}
              <a
                href="mailto:hello@nexlent.com"
                className="text-pink-500 hover:underline"
              >
                hello@nexlent.com
              </a>
            </p>
            <p>
              <strong>Chat via WhatsApp:</strong>{" "}
              <a
                href="tel:+8801948398893"
                className="text-pink-500 hover:underline"
              >
                +880 1948-39 88 93
              </a>
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Custom software development</li>
            <li>WordPress CMS Development</li>
            <li>Basic Cloud & Hosting Support</li>
            <li>AWS Cloud Services</li>
            <li>Microsoft Azure Services</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Front-end Development</li>
            <li>Full-stack Development</li>
            <li>API Development</li>
            <li>UI/UX and Product Design</li>
            <li>Backend Development</li>
            <li>WordPress Theme Customization</li>
            <li>E-commerce Solution</li>
            <li>Page Performance Optimization</li>
          </ul>
        </div>

        {/* About */}
        <div className="lg:pl-20">
          <h3 className="text-lg font-semibold mb-4 ">About Nexlent</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact us</li>
            <li>NexLogs (Blog)</li>
            <li>Nexlent Careers</li>
            <li>Nexlent CSR</li>
          </ul>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="my-16 text-gray-400 space-y-4 flex flex-col lg:flex-row justify-start gap-10 mx-auto max-w-6xl">
        <div className="mt-5">
          <p className="text-gray-200">Bangladesh</p>
          <p>
            House-1138, Shamota Shorok Road, Vatara,
            <br /> Dhaka-1206, Bangladesh.
          </p>
        </div>
        <div>
          <p className="text-gray-200">Malaysia</p>
          <p>
            Jalan Perkasa 5, Desa Senadin, Lutong,
            <br /> Miri-98000, Sarawak, Malaysia.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto max-w-6xl justify-between items-center text-gray-400 text-xs space-y-4 lg:space-y-0">
        <div>
          <p>&copy; 2024 Nexlent - All rights reserved</p>
        </div>
        <div>
          <p className="hover:text-pink-500">
            Privacy Policy - Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
