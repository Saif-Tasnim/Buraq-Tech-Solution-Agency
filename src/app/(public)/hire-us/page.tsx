import React from "react";
import { Form } from "./component";
import img from "@/app/assets/hire.jpg";
import Image from "next/image";

const HireUsPage = () => {
  return (
    <div className="flex justify-around items-center my-10">
      <div className="hidden lg:block">
        <Image src={img} alt="image" width={600} height={800} />
      </div>
      
      <>
        <Form />
      </>
    </div>
  );
};

export default HireUsPage;
