"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "sonner";
import { z } from "zod";

const faqValidationSchema = z.object({
  question: z.string({ required_error: "Title is required" }).optional(),
  answer: z.string({ required_error: "Content is required" }).optional(),
});

const UpdateFAQForm = ({ modalId, data }) => {
  const defaultValues = {
    ...data,
  };

  const submitHandler = async (data) => {
    console.log(data);
    const toastId = toast.loading("Updating FAQ...");
    try {
      //   const formData = new FormData();
      //   const { image, ...payload } = data;
      //   formData.append("file", image);
      //   formData.append("data", JSON.stringify(payload));
      toast.success("get data...", { id: toastId, duration: 2000 });
      //   console.log(formData);
      document.getElementById(modalId).close();

      // const res = await createSeller(formData).unwrap();
      // console.log(res);
      // toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={() => document.getElementById(modalId).showModal()}>
        <AiFillEdit className="inline text-xl text-orange-300 hover:text-orange-400 duration-500" />
      </button>

      <dialog id={modalId} className="modal">
        <div className="modal-box bg-blue-200">
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
                Update a Slide
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                defaultValues={defaultValues}
                resolver={zodResolver(faqValidationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"question"} label={"Question :"} />
                  <KAInput name={"answer"} label={"Answer :"} />
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

export default UpdateFAQForm;
