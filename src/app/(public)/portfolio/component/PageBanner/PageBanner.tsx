import React from "react";
import img from "@/app/assets/portfolio/portfolio-mockup.jpg";
import Image from "next/image";

const PageBanner = () => {
  return (
    <div className="flex justify-around items-center h-[90vh] w-full my-7">
      <div className="w-1/2">
        <h1 className="text-3xl lg:text-6xl text-primary font-semibold ml-4 my-12">
          Build Your Application With Us
        </h1>
        <p className="ml-8 text-xl lg:text-2xl">
          Explore our case studies from companies with similar challenges
        </p>
      </div>
      <div>
        <Image
          src={img.src}
          alt="image"
          width={500}
          height={500}
          className="lg:block mr-20 hidden"
        />
      </div>
    </div>
  );
};

export default PageBanner;
