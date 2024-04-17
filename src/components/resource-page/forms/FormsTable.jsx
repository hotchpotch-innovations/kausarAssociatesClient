import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";
import FormsTableData from "./FormsTableData";

const FormsTable = () => {
  return (
    <section>
      <div className="overflow-x-auto overflow-y-auto max-h-screen text-gray-500 py-4">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-base font-semibold uppercase text-slate-100 bg-blue-500 dark:bg-slate-700 dark:bg-opacity-50">
            <tr>
              <th className="p-2 whitespace-nowrap border border-gray-300">
                <div className="font-semibold text-left">Issuing Authority</div>
              </th>
              <th className="p-2 whitespace-nowrap border border-gray-300">
                <div className="font-semibold text-left">Category</div>
              </th>
              <th className="p-2 whitespace-nowrap border border-gray-300">
                <div className="font-semibold text-left">Form Title</div>
              </th>
              <th className="p-2 whitespace-nowrap border border-gray-300">
                <div className="font-semibold text-left">Description</div>
              </th>
              <th className="p-2 whitespace-nowrap border border-gray-300">
                <div className="font-semibold text-right">Download</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 bg-blue-100">
           
            <FormsTableData/>
            <FormsTableData/>
            <FormsTableData/>
            <FormsTableData/>
            <FormsTableData/>
            <FormsTableData/>
           
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FormsTable;
