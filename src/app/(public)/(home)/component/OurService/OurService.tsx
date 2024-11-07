"use client";
import { SectionName } from "@/app/component/shared";
import React, { useEffect } from "react";
import { SERVICES } from "../../static/services";
import SingleServices from "./SingleServices";
import Aos from "aos";

const OurService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-20 mx-6 overflow-hidden">
      <SectionName first="Our" second="Service" />

      <div
        className="my-12"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1800"
      >
        <p className="mb-6 text-justify mx-2 md:mx-6">
          Our team is passionately committed to delivering an exceptional blend
          of modern, sophisticated design and robust, high-speed backend
          infrastructure. We believe in creating solutions that not only look
          visually stunning but also perform seamlessly at scale, ensuring they
          can handle growing demands with ease. By prioritizing both aesthetics
          and functionality, we aim to provide our customers with reliable,
          scalable, and innovative solutions they can trust, enabling them to
          achieve their goals with confidence and efficiency in an ever-evolving
          digital landscape.{" "}
        </p>

        <div className="my-10 mx-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3 md:gap-6">
          {(SERVICES ?? [])?.map((service) => (
            <SingleServices
              key={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
