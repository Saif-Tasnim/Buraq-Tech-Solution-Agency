import React, { ReactNode } from "react";
import Header from "../component/shared/Header/Header";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicLayout;
