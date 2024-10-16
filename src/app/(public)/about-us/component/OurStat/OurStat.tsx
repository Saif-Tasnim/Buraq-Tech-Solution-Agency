import React from "react";

const OurStat = () => {
  return (
    <div className="my-28 mx-10">
      <h2 className="text-primary font-bold text-3xl">
        Milestones We&apos;ve Achieved
      </h2>
      <div className="lg:grid grid-cols-4 gap-8 mx-10 my-20">
        <p className="flex flex-col items-center gap-4">
          <span className="text-5xl"> 🌍 </span>
          <span className="text-nowrap text-sm font-medium">
            50+ Clients Across 10+ Countries
          </span>
        </p>
        <p className="flex flex-col items-center gap-4">
          <span className="text-5xl"> 👥 </span>
          <span className="text-nowrap text-sm font-medium">
            25+ Skilled Developers and Designers
          </span>
        </p>
        <p className="flex flex-col items-center gap-4">
          <span className="text-5xl"> ⏳ </span>
          <span className="text-nowrap text-sm font-medium">
            5+ Years of Industry Experience
          </span>
        </p>
        <p className="flex flex-col items-center gap-4">
          <span className="text-5xl"> 💼 </span>
          <span className="text-nowrap text-sm font-medium">
            20+ Industries Served
          </span>
        </p>
      </div>
    </div>
  );
};

export default OurStat;
