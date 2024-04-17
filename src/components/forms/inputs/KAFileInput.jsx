import React from "react";
import { Controller } from "react-hook-form";

const KAFileInput = ({ name, label, accept }) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <p className="mb-2 font-medium text-base text-gray-500">{label}</p>
      )}
      <Controller
        name={name}
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => {
          return (
            <>
              <input
                className={`w-full border py-1 rounded-sm text-gray-500 pl-2 ${
                  error?.message === "required"
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                {...field}
                value={value?.fileName}
                onChange={(e) => onChange(e.target?.files?.[0])}
                type="file"
                name={name}
                id={name}
                accept={`${accept ? accept : "image/*"}`}
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

export default KAFileInput;
