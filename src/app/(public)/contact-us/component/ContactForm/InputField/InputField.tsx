import React, { FC } from "react";

interface IInputFieldProps {
  type: string;
  name: string;
  placeholder: string;
}

const InputField: FC<IInputFieldProps> = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id=""
      placeholder={placeholder}
      className="w-72 md:w-96 bg-gray-100 rounded-md px-7 py-2 text-gray-900 outline-0 block mb-6 placeholder:text-header-bg border border-green-600"
    />
  );
};

export default InputField;
