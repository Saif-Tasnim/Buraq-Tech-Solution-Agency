import React from "react";
import { SERVICES } from "../../(home)/static/services";
import { notFound } from "next/navigation";
import { IService } from "../../(home)/static/type";
import { PageBanner } from "./component";
import Sample from "./component/Sample/Sample";
import { OurWork, Technologies } from "../../(home)/component";

const SingleServicePage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const services: IService | undefined = SERVICES.find(
    (service) => service.slug === slug
  );

  if (!services) {
    notFound();
  }

  const { description, image, title } = services;

  return (
    <>
      <PageBanner description={description} image={image} title={title} />
      <Sample />
      <OurWork />
      <Technologies />
    </>
  );
};

export default SingleServicePage;
