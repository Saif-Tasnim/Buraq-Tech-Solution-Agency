import Image from "next/image";
import React, { FC } from "react";
interface IPageBanner {
  description: string;
  image: string;
  title: string;
}
const PageBanner: FC<IPageBanner> = ({ description, image, title }) => {
  return (
    <div className="flex justify-around items-center h-[90vh] w-full my-7">
      <div className="w-1/2">
        <h1 className="text-3xl lg:text-6xl text-primary font-semibold lg:ml-4 my-12">
          {title}
        </h1>
        <p className="lg:ml-4 text-xl lg:text-2xl">{description}</p>
      </div>

      <div className="hidden lg:block">
        <Image src={image} alt="image" width={650} height={600} />
      </div>
    </div>
  );
};

export default PageBanner;
