"use client";
import React, { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ISectionNameProps {
  first: string;
  second: string;
}

const SectionName: FC<ISectionNameProps> = ({ first, second }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <div
      className="flex gap-3 items-end"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 className="font-semibold text-xl md:text-4xl italic text-header-bg">
        {first}
      </h1>
      <h3 className="font-semibold text-lg md:text-3xl italic text-primary">
        {second} ______________
      </h3>
    </div>
  );
};

export default SectionName;
