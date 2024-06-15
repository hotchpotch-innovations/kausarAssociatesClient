"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KASelect from "@/components/forms/inputs/KASelect";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";

const issuingAuthorityOptions = [];
const categoryOptions = [];

const validationSchema = z.object({});

const CreateCompanyFormData = () => {
  const submitHandler = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating category...");
    try {
      toast.success("get data...", { id: toastId, duration: 2000 });
      location.reload();
      document.getElementById("create-form-data").close();

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
        onClick={() => document.getElementById("create-form-data").showModal()}
      >
        Create Form Data
      </button>

      <dialog id={"create-form-data"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-form-data").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Create Form Data
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                resolver={zodResolver(validationSchema)}
              >
                <KAFormContainer>
                  <KASelect
                    name={"author"}
                    label={"Issuing Authority:"}
                    options={issuingAuthorityOptions}
                  />
                  <KASelect
                    name={"category"}
                    label={"Category:"}
                    options={categoryOptions}
                  />
                  <KAInput name={""} label={"Title:"} />
                  <KAInput name={""} label={"Description:"} />
                  <KAFileInput
                    name={""}
                    label={"Select File (in PDF):"}
                    accept={".pdf"}
                  />
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

export default CreateCompanyFormData;
