import React from "react";
import UpdateCompanyVideo from "./UpdateCompanyVideo";
import DeleteButton from "../../../website-management/home_page/components/buttons/DeleteButton";

const CompanyVideoTable = () => {
  const api = "";
  const data = [{ _id: "000121", title: "Video title number 1" }];
  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border mt-4">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="w-full grid grid-cols-5 gap-3">
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Serial</div>
              </th>
              <th className="col-span-3 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Title</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {data?.map((item, index) => {
              return (
                <tr key={item._id} className="w-full grid grid-cols-5 gap-3">
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{index + 1}</div>
                  </td>
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="text-left text-orange-300">
                      {item?.title}
                    </div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap space-x-2">
                    <UpdateCompanyVideo modalId={"update-company-video"} />
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

export default CompanyVideoTable;
