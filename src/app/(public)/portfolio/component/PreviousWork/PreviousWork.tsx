import { PORTFOLIOLIST } from "@/app/static/portfolio";
import React from "react";
import ProjectShowcase from "./ProjectShowcase";

const PreviousWork = () => {
  return (
    <div className="my-28">
      <h1 className="text-center text-3xl font-semibold text-purple-500 my-7">
        Lets Look At Our Previous Live Work
      </h1>
      <p className="text-center w-1/3 mx-auto">
        Almost 20+ projects are still live that is done by Buraq Tech Solution
        Team
      </p>

      <div className="my-16">
        {PORTFOLIOLIST.map((portfolio) => (
          <ProjectShowcase key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default PreviousWork;
