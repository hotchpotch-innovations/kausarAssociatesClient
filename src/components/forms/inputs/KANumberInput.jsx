import React from "react";
import { Controller } from "react-hook-form";

const KANumberInput = ({
  name,
  label,
  readonly,
  defaultValue,
  placeholder,
  min,
}) => {
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
              <input
                className={`w-full border py-1 rounded-sm text-gray-500 pl-2 ${
                  error?.message === "required"
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                {...field}
                defaultValue={defaultValue || 0}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                type="number"
                placeholder={placeholder}
                readOnly={readonly || false}
                min={min || 0}
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

export default KANumberInput;
