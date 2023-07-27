import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, type, ...rest } = props;
  const { errors, touched } = useFormikContext();
  const hasError = errors[name] && touched[name];
  return (
    <div className="relative">
      <Field
        id={name}
        name={name}
        type={type}
        {...rest}
        className={`h-[52px] w-full  bg-white rounded-md focus:outline-none placeholder-transparent relative peer disabled:opacity-70
          disabled:cursor-not-allowed pl-2 font-PoppinsLight
          ${hasError ? "border-red-600" : "border-white"}
          ${hasError ? "focus:border-rose-500" : "focus:border-green-500"}`}
        placeholder="demo"
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-[26px] font-PoppinsLight transition-all duration-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-[13px]  peer-focus:-top-[10px] ml-2 peer-focus:rounded-sm peer-focus:p-[2px] peer-focus:bg-gray-300 peer-focus:text-sm peer-focus:text-gray-900 cursor-text"
      >
        {label}
      </label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
