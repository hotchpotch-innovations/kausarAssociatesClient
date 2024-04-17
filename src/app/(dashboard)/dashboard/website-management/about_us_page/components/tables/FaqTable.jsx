import React from "react";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import DeleteButton from "../../../home_page/components/buttons/DeleteButton";
import UpdateFAQForm from "../forms/update-forms/UpdateFAQForm";

const FaqTable = async () => {
  const api = "http://localhost:3000/api/v1/faq";
  const result = await getAllDataFromDB(api);
  const faqData = result?.data || null;
  // console.log(faqData);

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-9 gap-3">
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Serial</div>
              </th>
              <th className="col-span-7 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Question</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {faqData?.map((item, index) => {
              return (
                <tr key={item._id} className="grid grid-cols-9 gap-3">
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{index + 1}</div>
                  </td>
                  <td className="col-span-7 p-2 whitespace-nowrap">
                    <div className="text-left text-orange-300">
                      {item?.question}
                    </div>
                  </td>
                  <td className="col-span-1 p-2 space-x-4 whitespace-nowrap">
                    <UpdateFAQForm modalId={item._id} data={item} />
                    <DeleteButton api={`${api}/${item._id}`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FaqTable;
