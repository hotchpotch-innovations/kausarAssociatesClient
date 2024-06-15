import Image from "next/image";
import React from "react";
import DeleteButton from "../../../../buttons/DeleteButton";

import { getData } from "@/utlts/getFromDB";
import ClientUpdateForm from "../forms/update-forms/ClientUpdateForm";

const ClientTable = async () => {
  const api = `${process.env.NEXT_PUBLIC_BACKEND_API}/clients`;
  const result = await getData(api);
  const clientsData = result?.data || null;

  console.log(clientsData);
  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-7 gap-3">
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Name</div>
              </th>
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Email</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Phone</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Cases</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {clientsData?.map((item) => {
              return (
                <tr className="grid grid-cols-7 gap-3" key={item._id}>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm w-12 h-12"
                          src={item.img}
                          width="40"
                          height="40"
                          alt={item?.name}
                        />
                      </div>
                      <div className="font-medium">{item?.name}</div>
                    </div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{item?.email}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{item?.phone}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{item?.dealCase}</div>
                  </td>
                  <td className="col-span-1 space-x-4 p-2 whitespace-nowrap">
                    <ClientUpdateForm modalId={item?._id} data={item} />
                    <DeleteButton
                      api={`${process.env.NEXT_PUBLIC_BACKEND_API}/clients/${item?._id}`}
                      // refetch={clientRefetch}
                    />
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

export default ClientTable;
