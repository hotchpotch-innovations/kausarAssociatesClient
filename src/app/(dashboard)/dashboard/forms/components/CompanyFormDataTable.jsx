import React from "react";
import DeleteButton from "../../website-management/home_page/components/buttons/DeleteButton";
import UpdateCompanyForm from "./UpdateCompanyForm";

const CompanyFormDataTable = () => {
  const api = "";
  const formData = [
    {
      title: "title 1",
      author: "Author 1",
      category: "Category 1",
    },
  ];

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0 border mt-4">
      <div className="overflow-x-auto overflow-y-auto max-h-90 text-gray-400 dark:text-gray-100 pb-4 rounded-sm">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="w-full text-xs font-semibold uppercase text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr className="w-full grid grid-cols-6 gap-3">
              <th className="col-span-3 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Title</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Author</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Category</div>
              </th>
              <th className="col-span-1 p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {formData?.map((data) => {
              return (
                <tr className="w-full grid grid-cols-6 gap-3" key={data._id}>
                  <td className="col-span-3 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.title}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.author}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap">
                    <div className="text-left">{data?.category}</div>
                  </td>
                  <td className="col-span-1 p-2 whitespace-nowrap space-x-2">
                    <UpdateCompanyForm modalId={"update-company-form-data"} />
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

export default CompanyFormDataTable;
