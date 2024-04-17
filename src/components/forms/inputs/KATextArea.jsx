import React from "react";
import { Controller } from "react-hook-form";

const KATextArea = ({
  name,
  label,
  span,
  type,
  placeholder,
  defaultValue,
  required,
}) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <p className="mb-2 font-medium text-base text-gray-500">
          {label}
          {span && <span className="text-xs italic ml-1">{span}</span>}
        </p>
      )}

      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <textarea
                className={`w-full textarea border py-1 rounded-sm text-gray-500 pl-2 ${
                  error?.message === "required"
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                {...field}
                defaultValue={defaultValue || ""}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required || false}
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

export default KATextArea;
