"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "@/app/assets/bg-1.jpg";
import Image from "next/image";
import { Button } from "@/app/component/core/Button";
import { SectionName } from "@/app/component/shared";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center my-20 mx-2 overflow-hidden">
      <div
        className="w-full"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <p className="text-justify">
          {" "}
          We are a dedicated team of passionate professionals committed to
          delivering innovative digital solutions that empower businesses to
          succeed in todays ever-evolving digital landscape. Our team comprises
          experienced web developers, creative designers, and savvy marketing
          experts who work collaboratively to craft customized strategies and
          solutions tailored to meet the unique needs of each client.
        </p>
        <div className="flex justify-center my-7">
          <Button href="/about-us" variant="primary">
            {" "}
            Know More{" "}
          </Button>
        </div>
      </div>
      <div
        className="w-1/2 mx-9 my-7"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <SectionName first="About" second="Us" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <Image
          src={img.src}
          alt="image"
          width={1200}
          height={1200}
          className="h-auto w-[1900px]"
        />
      </div>
    </div>
  );
};

export default AboutUs;
