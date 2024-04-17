import React from "react";
import Image from "next/image";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import DeleteButton from "../../home_page/components/buttons/DeleteButton";

const MemoriesPhotosTable = async () => {
  const api = "http://localhost:3000/api/v1/memories-photo";
  const result = await getAllDataFromDB(api);
  const photos = result?.data || null;
  console.log(photos);
  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border">
      <div className="overflow-x-auto overflow-y-auto max-h-96  text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Serial</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Images</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Delete</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {photos?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{index + 1}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className=" shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm"
                          src={item.img}
                          width="100"
                          height="80"
                          alt="kausar associates gallery"
                        />
                      </div>
                      <div className="font-medium">{item?._id}</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
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

export default MemoriesPhotosTable;
