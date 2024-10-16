"use client";
import React, { useEffect } from "react";
import { TEAM_MEMBER_LIST } from "../../static/team";
import SingleMember from "./SingleMember";
import Aos from "aos";

const OurTeam = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-28 mx-10">
      <h2 className="text-primary font-bold text-3xl">Our Team Member</h2>

      <div
        className="lg:grid grid-cols-3 gap-12 m-10"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        {TEAM_MEMBER_LIST.map((member) => (
          <SingleMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
