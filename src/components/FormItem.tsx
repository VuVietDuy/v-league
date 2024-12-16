import React from "react";
import { Form, FormStatus } from "../types/form";

interface IProps {
  form: Form;
}

function FormItem({ form }: IProps) {
  return (
    <div
      className={`rounded-full w-7 h-7  flex justify-center items-center 
        ${form.status === FormStatus.T && "bg-green-500"} 
        ${form.status === FormStatus.B && "bg-red-500"} 
        ${form.status === FormStatus.H && "bg-gray-400"}`}
    >
      <span className="text-sm font-bold text-white">{form.status}</span>
    </div>
  );
}

export default FormItem;
