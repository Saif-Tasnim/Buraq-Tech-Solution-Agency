import React from "react";

const Paragraph = ({ text }: { text: string }) => {
  return <p className="py-2 text-justify">{text}</p>;
};

export default Paragraph;
