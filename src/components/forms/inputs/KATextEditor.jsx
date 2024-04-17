import React from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const KATextEditor = ({ name, label }) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <p className="mb-2 font-medium text-base text-gray-500">{label}</p>
      )}
      <Controller
        name={name}
        render={({ field: { onChange, ...field }, fieldState: { error } }) => {
          return (
            <>
              <ReactQuill
                className={`w-full border py-1 rounded-sm text-gray-500 pl-2 ${
                  error?.message === "required"
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                theme="snow"
                {...field}
                onChange={(e) => onChange(parseFloat(e.target.value))}
              />
              {error && (
                <small className="block text-red-400">{error.message}</small>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default KATextEditor;
