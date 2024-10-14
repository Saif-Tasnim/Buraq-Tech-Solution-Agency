import { SectionName } from "@/app/component/shared";
import Image from "next/image";
import React from "react";
import Tech from "./Tech";
import { TECH } from "../../static/tech";

const Technologies = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center">
        <SectionName first="Technology" second="Stack" />
      </div>

      <div className="my-16 lg:grid grid-cols-8 gap-9 mx-8">
        {TECH.map((tec) => (
          <Tech key={tec.id} src={tec.src} name={tec.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
