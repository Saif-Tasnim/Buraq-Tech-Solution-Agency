import Image from "next/image";
import React, { FC } from "react";
interface ITechProps {
  src: string;
  name: string;
}

const Tech: FC<ITechProps> = ({ src, name }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src={src} alt="html" width={50} height={50} />
      <p className="text-xs text-center"> {name} </p>
    </div>
  );
};

export default Tech;
