import Image from "next/image";
import React from "react";
import EditButton from "../../website-management/home_page/components/buttons/EditButton";
import DeleteButton from "../../website-management/home_page/components/buttons/DeleteButton";

const CompanyNewsTable = () => {
  const blogs = [];
  return (
    <div>
      <div className="w-full mx-4 border">
        <div className="overflow-x-auto overflow-y-auto text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="w-full text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr className="w-full grid grid-cols-8 gap-3">
                <th className="col-span-2 p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Main Image & Title
                  </div>
                </th>
                <th className="col-span-2 p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Language</div>
                </th>
                <th className="col-span-3 p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Description</div>
                </th>
                <th className="col-span-1 p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {blogs?.map((data) => {
                return (
                  <tr className="w-full grid grid-cols-8 gap-3" key={data._id}>
                    <td className="col-span-2 p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <Image
                            className="rounded-sm"
                            src={data.mainImage}
                            width="40"
                            height="40"
                            alt={data.title}
                          />
                        </div>
                        <div className="font-medium">
                          {data?.title?.length > 25
                            ? data?.title?.slice(0, 24) + "..."
                            : data?.title}
                        </div>
                      </div>
                    </td>
                    <td className="col-span-2 p-2 whitespace-nowrap">
                      <div className="text-left">{data?.language}</div>
                    </td>
                    <td className="col-span-3 p-2 whitespace-nowrap">
                      <div className="text-left">
                        {data?.description?.length > 50
                          ? data?.description?.slice(0, 49) + "..."
                          : data?.description}
                      </div>
                    </td>
                    <td className="col-span-1 p-2 whitespace-nowrap">
                      <EditButton
                        route={`/dashboard/company-news-management/update-company-news/${data?._id}`}
                      />
                      <DeleteButton api={`${api}/${data._id}`} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyNewsTable;
