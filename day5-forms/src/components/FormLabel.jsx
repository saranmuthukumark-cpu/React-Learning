import React from "react";

const FormLabel = ({ htmlFor, children }) => {
  return (
    <label className="block text-sm font-medium text-gray-100" htmlFor={htmlFor}>
      {children}
      <span className="text-red-600">*</span>
    </label>
  );
};

export default FormLabel;