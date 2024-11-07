interface ISDLCProps {
  title: string;
  description: string;
  children: ReactNode;
  id: number;
}
import React, { FC, ReactNode } from "react";

const SDLC: FC<ISDLCProps> = ({ title, children, description,id }) => {
  return (
    <div className="flex items-center gap-6 relative bg-cyan-50 rounded-md md:w-fit p-[17px] md:mx-3 md:ml-0">
      <div>{children}</div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="text-xs">{description}</p>
      </div>
      
      <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-primary flex justify-center items-center">
        <p className="text-xs font-medium text-gray-200">
          {id}
        </p>
      </div>
    </div>
  );
};

export default SDLC;
