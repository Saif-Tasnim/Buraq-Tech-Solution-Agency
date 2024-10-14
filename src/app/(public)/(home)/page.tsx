import React from "react";
import {
  AboutUs,
  Banner,
  CTA,
  Dots,
  FAQ,
  OurService,
  OurWork,
  PeopleComment,
  RegularContact,
  Technologies,
} from "./component";

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
