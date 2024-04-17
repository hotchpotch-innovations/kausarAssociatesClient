import Image from "next/image";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import TeamUpdateForm from "../forms/update-forms/TeamUpdateForm";

const TeamTable = async () => {
  // console.log(teamSlideData);
  const api = "http://localhost:3000/api/v1/team-slides";
  const result = await getAllDataFromDB(api);
  const teamSlideData = result?.data || null;
  // console.log(teamSlideData);
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
                <div className="font-semibold text-start">Designation</div>
              </th>
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Total Case</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {teamSlideData.map((data) => {
              return (
                <tr className="grid grid-cols-7 gap-3" key={data._id}>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm w-12 h-12"
                          src={data?.img}
                          width="40"
                          height="40"
                          alt={data?.name}
                        />
                      </div>
                      <div className="font-medium">{data?.name}</div>
                    </div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.designation}</div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.dealCase}</div>
                  </td>
                  <td className="col-span-1 space-x-4 p-2 whitespace-nowrap">
                    <TeamUpdateForm modalId={data._id} data={data} />

                    <DeleteButton
                      api={`http://localhost:3000/api/v1/team-slides/${data._id}`}
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

export default TeamTable;
