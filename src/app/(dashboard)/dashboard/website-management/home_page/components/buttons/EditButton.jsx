"use client";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";

const EditButton = ({ route }) => {
  return (
    <Link href={route ? route : ""}>
      <button>
        <AiFillEdit className="inline text-xl text-orange-300 hover:text-orange-400 duration-500" />
      </button>
    </Link>
  );
};

export default EditButton;
