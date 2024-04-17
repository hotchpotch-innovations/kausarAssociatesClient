import Image from "next/image";
import React from "react";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import DeleteButton from "../../website-management/home_page/components/buttons/DeleteButton";
import EditButton from "../../website-management/home_page/components/buttons/EditButton";

const ServiceTable = async () => {
  const api = "http://localhost:3000/api/v1/services";
  const result = await getAllDataFromDB(api);
  const services = result?.data || null;

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
            {services.map((service) => {
              return (
                <tr key={service._id} className="grid grid-cols-7 gap-3">
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="flex items-start">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm"
                          src={service.bannerImage}
                          width="40"
                          height="40"
                          alt={service.title}
                        />
                      </div>
                      <div className="font-medium">{service.title}</div>
                    </div>
                  </td>
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="text-left">
                      {service?.subtitle?.length > 50
                        ? service?.subtitle?.slice(0, 49) + "..."
                        : service?.subtitle}
                    </div>
                  </td>
                  <td className="col-span-1 space-x-2 p-2 whitespace-nowrap">
                    <EditButton
                      route={`/dashboard/service-management/update-service/${service?._id}`}
                    />
                    <DeleteButton api={`${api}/${service._id}`} />
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

export default ServiceTable;
