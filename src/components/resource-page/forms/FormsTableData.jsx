import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";

const FormsTableData = () => {
  return (
    <tr className="hover:bg-slate-50 duration-500">
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div className="text-left">NBR</div>
      </td>
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div className="text-left">Tax Forms</div>
      </td>
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div>
          <p>Return Form</p>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div>
          <Link href={"/sample-pdf"} target="_blank" className="hover:underline hover:text-blue-500 duration-500 cursor-pointer">
            {/* Ensure limit content length */}
            <p>
              Return Form - ITA - 2023 - Except Individual & Company - Bangla
            </p>
          </Link>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap text-right border border-gray-300">
      
       <BsDownload className="inline text-xl hover:text-blue-600 duration-500 cursor-pointer"/>
     
      </td>
    </tr>
  );
};

export default FormsTableData;
