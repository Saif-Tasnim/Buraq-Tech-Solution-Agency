import React from "react";
import img from "@/app/assets/bg-2.jpg";
import { Button } from "@/app/component/core/Button";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-header-bg"
      style={
        {
          // backgroundImage: `url("https://nexlent.com/images/hero-bg.svg")`,
        }
      }
    >
      <div className="w-full flex justify-between py-6 px-9">
        <div className="md:px-9 py-14">
          {/* <h1 className="text-5xl font-semibold pl-2 flex flex-col md:flex-row">
            <span className="text-[#5e8d71] pb-5 md:py-0 md:pr-4">Buraq Tech </span>
            <span className="">Solution</span>
          </h1> */}
          <h1 className="text-8xl font-semibold pl-2 text-primary">
            {" "}
            Buraq Tech
          </h1>

          <h2 className="text-6xl font-semibold pl-2 text-gray-100 my-7">Solution</h2>
          <p className="text-xl my-16 italic pl-3 text-gray-300">
            From concept to launch, we craft digital experiences that captivate
            and convert.
          </p>
        </div>
        <div
          className="w-[650px] h-[450px] bg-no-repeat bg-cover hidden lg:block"
          style={{
            backgroundImage: `url(${img.src})`,
            clipPath: `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)`,
          }}
        ></div>
      </div>

      <div className="absolute bottom-6 left-32">
        <Button variant="primary" href="/hire-us" className="text-gray-100">
          {" "}
          Hire Us Now{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
