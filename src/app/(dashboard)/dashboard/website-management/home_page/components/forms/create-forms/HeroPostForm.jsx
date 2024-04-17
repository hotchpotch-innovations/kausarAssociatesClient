"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";

const heroSectionSchema = z.object({
  headline1: z.string({ required_error: "Headline 1 is required" }),
  headline2: z.string({ required_error: "Headline 2 is required" }),
  paragraph: z.string({ required_error: "Paragraph is required" }),
  image: z.object({}),
});

const HeroPostForm = () => {
  const route = useRouter();

  const submitHandler = async (data) => {
    const toastId = toast.loading("Creating slide...");
    try {
      const formData = new FormData();
      const { image, ...payload } = data;
      formData.append("file", image);
      formData.append("data", JSON.stringify(payload));
      toast.success("get data...", { id: toastId, duration: 2000 });
      console.log(formData);
      location.reload();
      document.getElementById("create-hero-modal").close();

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
        onClick={() => document.getElementById("create-hero-modal").showModal()}
      >
        Create a Slide
      </button>

      <dialog id={"create-hero-modal"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-hero-modal").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Create a Slide
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                resolver={zodResolver(heroSectionSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"headline1"} label={"Headline 1 :"} />
                  <KAInput name={"headline2"} label={"Headline 2 :"} />
                  <KAInput name={"paragraph"} label={"Paragraph :"} />
                  <KAFileInput name={"image"} label={"Select Image :"} />
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

export default HeroPostForm;
