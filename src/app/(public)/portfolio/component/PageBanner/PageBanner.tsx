import React from "react";
import img from "@/app/assets/portfolio/image.png";
import Image from "next/image";

const PageBanner = () => {
  return (
    <div className="flex justify-around items-center h-[90vh] w-full">
      <div>
        <h1 className="text-6xl text-primary font-semibold ml-4 my-12">
          Build Your Application With Us
        </h1>
        <p className="ml-8 text-2xl">
          Explore our case studies from companies with similar challenges
        </p>
      </div>
      <div>
        <Image
          src={img.src}
          alt="image"
          width={600}
          height={600}
          className="block mr-20"
        />
      </div>
    </div>
  );
};

export default PageBanner;
