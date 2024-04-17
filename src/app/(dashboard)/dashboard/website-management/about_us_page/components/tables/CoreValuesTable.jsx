import Image from "next/image";
import { getAllDataFromDB } from "@/utlts/getFromDB";
import DeleteButton from "../../../home_page/components/buttons/DeleteButton";
import UpdateCoreValuesForm from "../forms/update-forms/UpdateCoreValuesForm";

const CoreValuesTable = async () => {
  const api = "http://localhost:3000/api/v1/core-values";
  const result = await getAllDataFromDB(api);
  const coreValues = result?.data || null;
  // console.log(slides);
  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="grid grid-cols-5 gap-3">
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Title</div>
              </th>
              <th className="col-span-3 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Content</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {coreValues?.map((value) => {
              return (
                <tr key={value._id} className="grid grid-cols-5 gap-3">
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="flex values-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <Image
                          className="rounded-sm w-12 h-12"
                          src={value.img}
                          width="40"
                          height="40"
                          alt={value?.title}
                        />
                      </div>
                      <div className="font-medium">{value?.title}</div>
                    </div>
                  </td>
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="text-left">
                      {value?.content.length > 50
                        ? value?.content?.slice(0, 49) + "..."
                        : value?.content}
                    </div>
                  </td>
                  <td className="col-span-1 p-2 space-x-4 whitespace-nowrap">
                    <UpdateCoreValuesForm modalId={value?._id} data={value} />
                    <DeleteButton api={`${api}/${value._id}`} />
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

export default CoreValuesTable;
