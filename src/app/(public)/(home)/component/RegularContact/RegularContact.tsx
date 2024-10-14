import { Icon } from "@/app/component/core/Icon";
import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeContent from "./MarqueeContent";

const RegularContact = () => {
  return (
    <div className="my-16">
      <Marquee pauseOnHover speed={100}>
        <div className="flex gap-16">
          <MarqueeContent title="Our Address" value="Dhaka, Bangladesh">
            {" "}
            <Icon.Home className="w-9" />{" "}
          </MarqueeContent>
          <MarqueeContent title="Call Us at" value="+099978787867757656">
            {" "}
            <Icon.PhoneCall className="w-9" />{" "}
          </MarqueeContent>
          <MarqueeContent title="Our Email" value="novanex-it@gmail.com">
            {" "}
            <Icon.Mail className="w-9" />{" "}
          </MarqueeContent>
        </div>
      </Marquee>
    </div>
  );
};

export default RegularContact;
