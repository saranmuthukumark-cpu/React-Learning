import React from "react";
import InputLabel from "./FormLabel";
import InputForm from "./FormInput";

const InputGroup = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputForm
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputGroup;