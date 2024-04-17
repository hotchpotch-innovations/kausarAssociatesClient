"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";

const serviceCategoryValidationSchema = z.object({
  menu: z.string({ required_error: "Menu is required" }),
});

const ServiceCategoryForm = () => {
  const submitHandler = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating slide...");
    try {
      toast.success("get data...", { id: toastId, duration: 2000 });
      location.reload();
      document.getElementById("create-service-category").close();

      // const res = await createSeller(formData).unwrap();
      // console.log(res);
      // toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <>
      <button
        className={"px-2 py-1 my-4 border bg-primary text-white rounded"}
        onClick={() =>
          document.getElementById("create-service-category").showModal()
        }
      >
        Create Category
      </button>

      <dialog id={"create-service-category"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-service-category").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Create Service Category
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                resolver={zodResolver(serviceCategoryValidationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"menu"} label={"Menu :"} />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 border border-rounded"
                    >
                      Submit
                    </button>
                  </div>
                </KAFormContainer>
              </KAForm>
            </div>
          </div>

          {/* Modal Closing Trips  */}
          <div>
            <p className="py-2 text-end text-xs text-gray-400">
              Press ESC key or click on ✕ button to close
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ServiceCategoryForm;
