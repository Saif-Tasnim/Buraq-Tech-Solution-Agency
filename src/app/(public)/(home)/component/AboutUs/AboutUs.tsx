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
    <div className="my-20 mx-6 overflow-hidden">
      <SectionName first="About" second="Us" />

      <div className="flex flex-col md:flex-row md:justify-between my-12">
        <div
          className="w-1/2"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p className="text-justify mt-5">
            {" "}
            We are a dedicated team of passionate professionals committed to
            delivering innovative digital solutions that empower businesses to
            succeed in todays ever-evolving digital landscape. Our team
            comprises experienced web developers, creative designers, and savvy
            marketing experts who work collaboratively to craft customized
            strategies and solutions tailored to meet the unique needs of each
            client.
          </p>

          <div className="flex gap-20 items-center mt-10">
            <div className="flex gap-4 items-center">
              <Image
                src="https://nexlent.com/images/icons/medal.svg"
                alt="image"
                width={60}
                height={20}
              />
              <div className="flex flex-col justify-center">
                <h3 className="py-2 font-medium text-nowrap">
                  Best Design Team
                </h3>
                <p className="text-xs">
                  We design modern digital products at scale
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="https://nexlent.com/images/icons/medal.svg"
                alt="image"
                width={60}
                height={20}
              />
              <div>
                <h3 className="py-2 font-medium text-nowrap">
                  Agile Development Process
                </h3>
                <p className="text-xs">
                  Rapid software creation, frequent customer collaboration and,
                  adaptable to change
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Button href="/about-us" variant="primary">
              {" "}
              Know More{" "}
            </Button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Image
            src={img.src}
            alt="image"
            width={500}
            height={800}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
