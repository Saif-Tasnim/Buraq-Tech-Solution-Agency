import React from "react";
import img from "@/app/assets/bg-2.jpg";
import { Button } from "@/app/component/core/Button";

const Banner = () => {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url("https://nexlent.com/images/hero-bg.svg")`,
      }}
    >
      <div className="w-full flex justify-between mt-6 px-9">
        <div className="md:py-32 md:px-9 py-12">
          <h1 className="text-5xl font-semibold pl-2 flex flex-col md:flex-row">
            <span className="text-[#5e8d71] pb-5 md:py-0 md:pr-4">Buraq Tech </span>
            <span className="">Solution</span>
          </h1>
          <p className="text-xl md:text-2xl my-16 italic pl-3">
            From concept to launch, we craft digital experiences that captivate
            and convert.
          </p>
        </div>
        <div
          className="w-[800px] h-[450px] bg-no-repeat bg-cover hidden lg:block"
          style={{
            backgroundImage: `url(${img.src})`,
            clipPath: `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)`,
          }}
        ></div>
      </div>

      <div className="absolute bottom-4 left-6">
        <Button variant="primary" href="/contact-us">
          {" "}
          Connect With Us{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
