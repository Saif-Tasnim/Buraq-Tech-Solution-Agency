import { SectionName } from "@/app/component/shared";
import React from "react";
import img from "@/app/assets/sdlc.webp";
import Image from "next/image";
import SDLC from "./SDLC";
import { Icon } from "@/app/component/core/Icon";

const OurWork = () => {
  return (
    <div className="my-20 mx-6 overflow-hidden">
      <SectionName first="How We" second="Work" />

      <div className="my-28 md:mx-6 flex justify-between items-start">
        <div className="hidden lg:block">
          <Image
            src={img.src}
            alt="image"
            width={400}
            height={350}
            className="rounded-lg block"
          />
        </div>
        <div className="h-[400px] border-l-2 border-primary hidden lg:block"></div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SDLC
            title="Planning"
            description="Brainstorming and defining the project’s goals and direction"
            id={1}
          >
            {" "}
            <Icon.Presentation className="w-12 h-12" />
          </SDLC>
          <SDLC
            title="Requirements"
            description="Gathering and documenting project needs and specifications"
            id={2}
          >
            {" "}
            <Icon.ListChecks className="w-12 h-12" />
          </SDLC>
          <SDLC
            title="Design"
            description="Creating system architecture, wireframes, and mockups."
            id={3}
          >
            {" "}
            <Icon.Frame className="w-12 h-12" />
          </SDLC>
          <SDLC
            title="Development"
            description=" Writing the code to build the software based on the design"
            id={4}
          >
            {" "}
            <Icon.Code className="w-12 h-12" />
          </SDLC>
          <SDLC
            title="Testing"
            description="Identifying and fixing bugs to ensure the software works as expected."
            id={5}
          >
            {" "}
            <Icon.ShieldCheck className="w-12 h-12" />
          </SDLC>
          <SDLC
            title="Deployment"
            description="Launching the software in a live environment."
            id={6}
          >
            {" "}
            <Icon.Radio className="w-12 h-12" />
          </SDLC>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
