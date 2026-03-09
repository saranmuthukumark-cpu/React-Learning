import React from "react";

const FormInput = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full mt-1 p-2 bg-gray-300 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  );
};

export default FormInput;