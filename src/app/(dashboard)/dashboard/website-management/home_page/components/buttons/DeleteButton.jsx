"use client";
import { deleteDataToDB } from "@/utlts/deleteFromDB";
import React from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

const DeleteButton = ({ api, refetch }) => {
  const deleteHandler = async () => {
    if (api) {
      const result = await deleteDataToDB(api);
      if (result.success) {
        toast.success(result?.message);
        refetch && refetch();
      } else {
        toast.error(result?.message);
      }
    } else {
      alert("This feature is coming soon!");
    }
  };

  return (
    <button onClick={() => deleteHandler(api)}>
      <AiFillDelete className="inline text-lg text-red-300 hover:text-red-500 duration-500" />
    </button>
  );
};

export default DeleteButton;
