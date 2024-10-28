import React from "react";
import InputField from "./InputField/InputField";
import { Button } from "@/app/component/core/Button";

const ContactForm = () => {
  return (
    <div>
      <div>
        <InputField type="text" name="user-name" placeholder="Your Name" />
        <InputField type="email" name="user-email" placeholder="Your Email" />
        <InputField type="tel" name="user-tel" placeholder="Your Phone No." />
        <textarea
          name="comments"
          id=""
          className="w-96 h-32 rounded-md px-7 py-2 resize-none block mb-6 outline-primary bg-gray-100 border-gray-800 border"
          placeholder="Your Message Here ...."
        ></textarea>

        <Button href="/" variant="primary">
          {" "}
          Send Message{" "}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
