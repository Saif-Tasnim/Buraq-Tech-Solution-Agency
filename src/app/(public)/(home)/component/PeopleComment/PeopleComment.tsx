"use client";
import { SectionName } from "@/app/component/shared";
import React, { useEffect } from "react";
import SingleComment from "./SingleComment";
import Aos from "aos";

const PeopleComment = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-32">
      <div className="flex justify-center">
        <SectionName first="People's" second="Comments" />
      </div>

      <div
        className="lg:grid grid-cols-3 gap-5 my-28 mx-10"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        <SingleComment
          description="Working with Novanex It was a game-changer for our business. Their team took the time to understand our needs and delivered a tailored software solution that not only streamlined our processes but also boosted our revenue."
          name="John Doe"
          designation="CEO, Tech Innovators"
        />

        <SingleComment
          description="As a startup, finding a reliable development partner was crucial for us, and Novanex It exceeded our expectations. Their technical expertise, creativity, and proactive communication made the entire process effortless."
          name="Jane Smith"
          designation="Founder, Appify Solutions"
        />

        <SingleComment
          description="The team at Novanex It brings an incredible mix of technical know-how and project management skills. They not only developed a cutting-edge platform for us but also helped us navigate complex challenges with ease. A true partner in innovation!"
          name="Robert Brown"
          designation="CTO, Digital Ventures Inc."
        />
      </div>
    </div>
  );
};

export default PeopleComment;
