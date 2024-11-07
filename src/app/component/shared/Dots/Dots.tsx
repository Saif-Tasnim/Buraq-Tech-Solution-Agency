import React from "react";

const Dots = () => {
  return (
    <div className="mt-20 mb-12 w-[80%] md:w-3/4 mx-auto flex gap-3 items-center">
      <hr className="border-primary w-96 ml-10" />
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "black",
        }}
      ></div>
      <hr className="border-primary w-96" />
    </div>
  );
};

export default Dots;
