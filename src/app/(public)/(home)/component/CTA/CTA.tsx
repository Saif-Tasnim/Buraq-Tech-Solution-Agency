import { Icon } from "@/app/component/core/Icon";
import React from "react";

const CTA = () => {
  return (
    <div className="flex bg-primary z-40">
      <div className="w-1/2 h-24 border bg-header-bg flex justify-center items-center">
        <h1 className="font-semibold text-gray-200 text-3xl">
          Call To Action 
        </h1>
      </div>
      <div
        className="bg-emerald-700 w-48 -mx-12"
        style={{
          clipPath: `polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)`,
        }}
      ></div>
      <div className="w-1/3 flex justify-end items-center gap-4">
        <Icon.PhoneCall className="w-12 h-12" />
        <h1 className="text-2xl font-bold text-gray-700 ">+099978787867757656</h1>
      </div>
    </div>
  );
};

export default CTA;
