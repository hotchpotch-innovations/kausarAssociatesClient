"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { z } from "zod";

const validationSchema = z.object({});

const UpdateCompanyProfile = ({ modalId }) => {
  const submitHandler = (data) => {
    console.log(data);
  };

  const defaultValues = {};

  return (
    <>
      <button onClick={() => document.getElementById(modalId).showModal()}>
        <AiFillEdit className="inline text-xl text-orange-300 hover:text-orange-400 duration-500" />
      </button>

      <dialog id={modalId} className="modal">
        <div className="modal-box bg-blue-100">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() => document.getElementById(modalId).close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Update Company Profile
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                defaultValues={defaultValues}
                resolver={zodResolver(validationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={""} label={"Profile Title:"} />
                  <KAFileInput name={""} label={"Profile Image:"} />
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

export default UpdateCompanyProfile;
