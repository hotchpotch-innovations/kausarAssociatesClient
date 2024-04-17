import React from "react";

const KASubmitButton = ({ title }) => {
  return (
    <div className="mx-2">
      <input
        type="submit"
        className="w-full border uppercase py-1 rounded-sm bg-blue-400 text-center hover:bg-blue-600 text-gray-300 hover:text-white duration-500 cursor-pointer"
        value={title}
      ></input>
    </div>
  );
};

export default KASubmitButton;
