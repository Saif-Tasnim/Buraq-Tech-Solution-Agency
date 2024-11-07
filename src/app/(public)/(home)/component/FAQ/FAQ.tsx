"use client";
import { SectionName } from "@/app/component/shared";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-20 mx-6 overflow-hidden">
      <SectionName first="Asked" second="Questions" />

      <div className="p-6 overflow-x-hidden my-10">
        {/* Accordion Item 1 */}
        <div className="border-b border-b-cyan-600">
          <button
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(1)}
          >
            <span className="text-sm md:text-lg font-semibold">
              What services does Buraq Tech offer?
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-500 ease-in-out ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === 1 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4">
              Buraq Tech offers custom software development, web and mobile app
              development, UI/UX design, and IT consulting, along with ongoing
              support and maintenance.
            </p>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border-b border-b-cyan-600">
          <button
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(2)}
          >
            <span className="text-sm md:text-lg font-semibold">
              How does Buraq Tech manage projects and timelines?
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-500 ease-in-out ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === 2 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4">
              Buraq Tech uses agile development with regular updates and sprints
              to stay on schedule while maintaining flexibility.
            </p>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border-b border-b-cyan-600">
          <button
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(3)}
          >
            <span className="text-sm md:text-lg font-semibold">
              What industries does Buraq Tech serve?
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-500 ease-in-out ${
                activeIndex === 3 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === 3 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4">
              We serve industries like e-commerce, healthcare, finance,
              education, and technology startups, offering tailored solutions to
              diverse business needs.
            </p>
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="border-b border-b-cyan-600">
          <button
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(4)}
          >
            <span className="text-sm md:text-lg font-semibold">
              How does Buraq Tech ensure quality in software solutions?
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-500 ease-in-out ${
                activeIndex === 4 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === 4 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4">
              We have a thorough quality assurance process, including code
              reviews, automated and manual testing, and performance
              optimization.
            </p>
          </div>
        </div>

        {/* Accordion Item 5 */}
        <div className="border-b border-b-cyan-600">
          <button
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleAccordion(5)}
          >
            <span className="text-sm md:text-lg font-semibold">
              Can Buraq Tech work with legacy software?
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-500 ease-in-out ${
                activeIndex === 5 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === 5 ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="p-4">
              Yes, Buraq Tech has experience in modernizing and enhancing legacy
              software, including system integration and technology upgrades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
