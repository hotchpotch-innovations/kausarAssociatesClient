import Image from "next/image";
import React from "react";
import DeleteButton from "../../../website-management/home_page/components/buttons/DeleteButton";
import UpdateCompanyProfile from "./UpdateCompanyProfile";

const CompanyProfileTable = () => {
  const api = "";
  const profiles = [
    {
      _id: "0000215",
      profileImage: "",
      title: "This is title",
      profile: "abc.pdf",
    },
  ];

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border mt-4">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="w-full text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-5 gap-3">
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Image</div>
              </th>
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">File</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {profiles?.map((data) => {
              return (
                <tr className="grid grid-cols-5 gap-3" key={data._id}>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="flex values-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm w-12 h-12"
                          src={data?.profileImage}
                          width="40"
                          height="40"
                          alt={data?.title}
                        />
                      </div>
                      <div className="font-medium">{data?.title}</div>
                    </div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.profile}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap space-x-2">
                    <UpdateCompanyProfile modalId={"update-company-profile"} />
                    <DeleteButton api={`${api}/${data._id}`} />
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

export default CompanyProfileTable;
