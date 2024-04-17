import Image from "next/image";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import HeroUpdateForm from "../forms/update-forms/HeroUpdateForm";

const HeroTable = async () => {
  const api = "http://localhost:3000/api/v1/hero-slides";
  const result = await getAllDataFromDB(api);
  const slides = result?.data || null;

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-7 gap-3">
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Headline 1</div>
              </th>
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Headline 2</div>
              </th>
              <th className="col-span-2 p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Subtitle</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-start">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {slides?.map((slide) => {
              return (
                <tr className="grid grid-cols-7 gap-3" key={slide._id}>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm"
                          src={slide.img}
                          width="40"
                          height="40"
                          alt={slide.name}
                        />
                      </div>
                      <div className="font-medium">{slide.title1}</div>
                    </div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{slide.title2}</div>
                  </td>
                  <td className="col-span-2 p-2 whitespace-nowrap">
                    <div className="text-left">{slide.subtitle}</div>
                  </td>
                  <td className="col-span-1 p-2 space-x-4 whitespace-nowrap">
                    <HeroUpdateForm modalId={slide?._id} data={slide} />
                    <DeleteButton api={`${api}/${slide?._id}`} />
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

export default HeroTable;
