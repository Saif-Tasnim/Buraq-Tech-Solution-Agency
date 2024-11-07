import { SectionName } from "@/app/component/shared";
import React from "react";
import Tech from "./Tech";
import { TECH } from "../../static/tech";

const Technologies = () => {
  return (
    <div className="my-20 mx-6 overflow-hidden">
      <SectionName first="Technology" second="Stack" />

      <div className="my-16 grid grid-cols-4 lg:grid-cols-8 gap-9 md:mx-2">
        {TECH.map((tec) => (
          <Tech key={tec.id} src={tec.src} name={tec.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
