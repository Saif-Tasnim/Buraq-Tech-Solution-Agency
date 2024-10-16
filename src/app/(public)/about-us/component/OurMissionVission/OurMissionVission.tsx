import React from "react";

const OurMissionVission = () => {
  return (
    <div className="my-10 flex justify-around items-center">
      <div className="w-1/3 border-l-4 border-l-header-bg p-3 rounded-md bg-purple-100 shadow-lg shadow-purple-200 hover:scale-110 transition-transform duration-500">
        <h2 className="text-center text-xl font-semibold text-purple-800 border-b-2 border-gray-50 mb-6 py-2">
          Our Mission
        </h2>
        <ul className="text-sm text-justify flex flex-col gap-7 py-4">
          <li>
            🌐 Deliver innovative, tailored software and cloud-based solutions
            that drive business growth.
          </li>
          <li>
            ⭐ Prioritize client satisfaction by providing high-quality,
            reliable, and efficient digital solutions.
          </li>
          <li>
            💻 Leverage cutting-edge technology to solve real-world business
            challenges.
          </li>
          <li>
            🤝 Foster long-term partnerships through collaboration,
            transparency, and trust.
          </li>
        </ul>
      </div>

      <div className="w-1/3 border-l-4 border-l-primary p-3 rounded-md bg-cyan-200 shadow-lg shadow-cyan-200 hover:scale-110 transition-transform duration-500">
      <h2 className="text-center text-xl font-semibold text-primary border-b-2 border-gray-50 mb-6 py-2">
          Our Vision
        </h2>
        <ul className="text-sm text-justify flex flex-col gap-6 py-4">
          <li>
            🏆 To become a global leader in web and cloud-based software
            development, setting industry standards for innovation and quality.
          </li>
          <li>
            🚀 Continuously adapt to emerging technologies and market trends to
            offer the best solutions to our clients.
          </li>
          <li>
            📈 Empower businesses across diverse industries to thrive in a
            rapidly evolving digital world.
          </li>
          <li>
            🌱 Create a positive impact on the technology landscape through
            sustainable and innovative digital solutions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurMissionVission;
