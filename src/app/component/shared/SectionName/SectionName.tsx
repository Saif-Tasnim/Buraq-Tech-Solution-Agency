import React, { FC } from "react";
interface ISectionNameProps {
  first: string;
  second: string;
}

const SectionName: FC<ISectionNameProps> = ({ first, second }) => {
  return (
    <div className="w-36 h-36 md:w-56 md:h-56 bg-header-bg rounded-full flex flex-col gap-3 justify-center items-center">
      <h1 className="font-semibold text-xl md:text-4xl italic text-gray-200">{first}</h1>
      <h3 className="font-semibold text-lg md:text-3xl italic text-gray-100">{second}</h3>
    </div>
  );
};

export default SectionName;