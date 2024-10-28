import React from "react";
import { ContactForm, Map } from "./component";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-around items-center my-16">
      <div>
        <h1 className="text-center mb-7 text-primary font-semibold text-xl">
          Our Locations{" "}
        </h1>
        <Map />
      </div>
      <div>
        <h1 className="text-center mb-7 text-primary font-semibold text-xl">
          Connect With Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
