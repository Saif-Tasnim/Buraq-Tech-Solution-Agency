import React, { FC, ReactNode } from "react";

interface IMarqueeContent {
  title: string;
  value: string;
  children: ReactNode;
}

const MarqueeContent: FC<IMarqueeContent> = ({ title, value, children }) => {
  return (
    <div className="flex items-center gap-2 mx-8">
      <h1 className="text-xl font-medium">{title} : </h1>
      <p className="flex items-center">
        {children}
        <span className="text-red-600 font-semibold text-lg">{value}</span>
      </p>
    </div>
  );
};

export default MarqueeContent;
