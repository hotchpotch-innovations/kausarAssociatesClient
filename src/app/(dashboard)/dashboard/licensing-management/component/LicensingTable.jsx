import { getData } from "@/utlts/getFromDB";
import React from "react";
import Image from "next/image";
import EditButton from "../../website-management/home_page/components/buttons/EditButton";
import DeleteButton from "../../website-management/home_page/components/buttons/DeleteButton";

const LicensingTable = async () => {
  const api = "http://localhost:3000/api/v1/licensing";
  const result = await getData(api);
  const licensing = result?.data || null;
  // console.log(item);
  return (
    <div className="w-full mx-4 border">
      <div className="overflow-x-auto overflow-y-auto text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-7 gap-3">
              <th className="col-span-3 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">
                  Banner Image & Title
                </div>
              </th>
              <th className="col-span-3 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Banner Subtitle</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {licensing.map((item) => {
              return (
                <tr key={item._id} className="grid grid-cols-7 gap-3">
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="flex items-start">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm"
                          src={item.bannerImage}
                          width="40"
                          height="40"
                          alt={item.title}
                        />
                      </div>
                      <div className="font-medium">{item.title}</div>
                    </div>
                  </td>
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="text-left">
                      {item?.subtitle?.length > 50
                        ? item?.subtitle?.slice(0, 49) + "..."
                        : item?.subtitle}
                    </div>
                  </td>
                  <td className="col-span-1 space-x-2 p-2 whitespace-nowrap">
                    <EditButton
                      route={`/dashboard/licensing-management/update-licensing/${item?._id}`}
                    />
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

export default LicensingTable;
