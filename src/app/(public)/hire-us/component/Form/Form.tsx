"use client"

import InputField from "@/app/(public)/contact-us/component/ContactForm/InputField/InputField";
import { Button } from "@/app/component/core/Button";
import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-primary font-semibold mb-10">
        Hire Us Now !{" "}
      </h1>

      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="first-name"
          placeholder="Your First Name"
        />
        <InputField type="text" name="last-name" placeholder="Your Last Name" />
        <InputField type="email" name="email" placeholder="Your Email" />
        <InputField
          type="tel"
          name="telephone"
          placeholder="Your Contact No."
        />
        <InputField type="text" name="address" placeholder="Your Address" />

        <select
          name="area"
          id=""
          className="w-72 md:w-96 bg-gray-100 rounded-md px-7 py-2 text-gray-900 outline-0 block mb-6 placeholder:text-header-bg border border-green-600"
        >
          <option value="" disabled selected>
            Please choose your desired field{" "}
          </option>
          <option value="Custom Software Develop">
            Custom Software Develop
          </option>
          <option value="Website Develop">Website Develop</option>
          <option value="Mobile Application Develop">
            Mobile Application Develop
          </option>
          <option value="Networking Service Management">
            Networking Service Management
          </option>
          <option value="AI Software Develop">AI Software Develop</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <textarea
          name="comments"
          id=""
          className="w-72 md:w-96 h-32 rounded-md px-7 py-2 resize-none block mb-6 outline-primary bg-gray-100 border-gray-800 border"
          placeholder="Tell us about your project briefly .... "
        ></textarea>

        <Button href="/" variant="primary">
          {" "}
          Apply To Us{" "}
        </Button>
      </form>
    </div>
  );
};

export default Form;
