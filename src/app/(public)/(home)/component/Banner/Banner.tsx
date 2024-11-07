import React from "react";
import img from "@/app/assets/bg-2.jpg";
import { Button } from "@/app/component/core/Button";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-header-bg">
      <div className="w-full flex justify-between py-6 px-4">
        <div className="md:px-4 py-12">
          <h1 className="text-8xl font-semibold text-primary"> Buraq Tech</h1>

          <h2 className="text-6xl font-semibold text-gray-100 my-3">
            Solution
          </h2>
          <p className="text-xl my-12 italic text-gray-300">
            From concept to launch, we craft digital experiences that captivate
            and convert.
          </p>
        </div>
        <div
          className="w-[650px] h-[500px] bg-no-repeat bg-cover hidden lg:block rounded-md"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        ></div>
      </div>

      <div className="absolute bottom-14 left-6">
        <Button variant="primary" href="/hire-us" className="text-gray-100">
          {" "}
          Hire Us Now{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
