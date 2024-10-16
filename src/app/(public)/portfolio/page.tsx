import React from "react";
import { PageBanner, PreviousWork } from "./component";
import { Dots } from "@/app/component/shared";

const PortfolioPage = () => {
  return (
    <>
      <PageBanner />
      <Dots />
      <PreviousWork />
    </>
  );
};

export default PortfolioPage;
