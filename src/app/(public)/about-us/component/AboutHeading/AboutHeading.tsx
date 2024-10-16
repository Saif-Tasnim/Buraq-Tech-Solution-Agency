import React from "react";

const AboutHeading = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url("https://nexlent.com/images/hero-bg.svg")`,
      }}
    >
      <div className="w-full flex justify-center items-center">
        <div className="py-28 px-9">
          <h1 className="text-7xl text-primary font-extrabold pl-2">
            Innovate. Integrate. Accelerate{" "}
          </h1>
          <h1 className="text-center my-6 text-6xl text-purple-500 font-bold">
            Your Partner in Technology
          </h1>
          <p className="text-lg mt-20 italic text-justify">
            At Novanex IT, we are a forward-thinking software company
            specializing in the development of custom software, high-performance
            web and mobile applications, and innovative AI solutions. Our
            commitment to excellence in web and cloud engineering ensures that
            we deliver reliable networking services and user-centric design,
            empowering your business to thrive in a digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;
