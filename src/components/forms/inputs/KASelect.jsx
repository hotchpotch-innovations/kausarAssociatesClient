import React from "react";
import { Controller } from "react-hook-form";

const KASelect = ({ name, label, defaultValue, options }) => {
  return (
    <div className="w-full mb-2">
      {label && (
        <p className="mb-2 font-medium text-base text-gray-500">{label}</p>
      )}
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <select
                {...field}
                name={name}
                id={name}
                defaultValue={defaultValue || ""}
                className={`w-full border py-1 rounded-sm bg-transparent pl-2`}
              >
                <option value="">Select one</option>
                {options.map((item) => (
                  <option key={item?.value} value={item?.value}>
                    {item?.label}
                  </option>
                ))}
              </select>
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

export default KASelect;
