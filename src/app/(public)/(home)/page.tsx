import React from "react";
import {
  AboutUs,
  Banner,
  CTA,
  FAQ,
  OurService,
  OurWork,
  PeopleComment,
  RegularContact,
  Technologies,
} from "./component";
import { Dots } from "@/app/component/shared";

const HomePage = () => {
  return (
    <>
      <Banner />
      <CTA />
      <AboutUs />
      <RegularContact />
      <OurService />
      <Technologies />
      <OurWork />
      <PeopleComment />
      <FAQ />
      <Dots />
    </>
  );
};

export default HomePage;
