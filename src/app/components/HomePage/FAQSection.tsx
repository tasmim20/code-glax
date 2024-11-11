import Image from "next/image";
import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a variety of software development services including web and mobile application development, UX/UI design, and more.",
    },
    {
      question:
        "Do you provide tailored software development services specific to my industry?",
      answer:
        "Yes, we tailor our services to meet the unique needs of each industry, ensuring customized solutions for maximum impact.",
    },
    {
      question:
        "What's your experience in custom software development services you are offering?",
      answer:
        "Our team has extensive experience delivering custom software solutions across multiple sectors for over a decade.",
    },
    {
      question: "How experienced are you in WordPress development services?",
      answer:
        "We have a dedicated team specializing in WordPress development, offering custom themes, plugins, and optimization services.",
    },
    {
      question:
        "Why should I consider your software development agency as a partner?",
      answer:
        "We are committed to delivering quality solutions, on-time delivery, and continuous support to ensure your project's success.",
    },
    {
      question: "How is your work process different from others?",
      answer:
        "Our work process emphasizes transparency, agile methodologies, and close collaboration with our clients for optimal outcomes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
      {/* Left Side Illustration and Heading */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0">
        <div className="relative mb-4 w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <Image
            src="https://nexlent.com/images/illustration-faq.svg"
            alt="FAQ Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-gray-200 ml-0 md:ml-5 ">
          FAQs
        </h2>
        <p className="text-gray-300 mt-2 text-lg md:text-2xl ml-0 md:ml-5">
          Frequently Asked Questions
        </p>
      </div>

      {/* Right Side FAQ List */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">FAQs</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-2 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg  font-medium text-gray-300">
                  {faq.question}
                </h3>
                <span
                  className={`text-blue-700 text-2xl transition-transform transform duration-300 ${
                    openIndex === index ? "rotate-0" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                {openIndex === index && (
                  <p className="mt-2 text-gray-400">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
