import React from "react";

const SingleServicePage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default SingleServicePage;
