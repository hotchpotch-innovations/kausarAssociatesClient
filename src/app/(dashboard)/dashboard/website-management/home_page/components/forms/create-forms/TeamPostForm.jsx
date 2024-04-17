"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KANumberInput from "@/components/forms/inputs/KANumberInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

const teamValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  designation: z.string({ required_error: "Designation is required" }),
  dealCase: z.number({ required_error: "Deal case is required" }).optional(),
  contactInfo: z.object({
    email: z.string({ required_error: "Email is required" }),
    web_mail: z.string().optional(),
    phone: z.string({ required_error: "Phone number is required" }),
  }),
  image: z.object({}),
});

const TeamPostForm = () => {
  const submitHandler = async (data) => {
    const toastId = toast.loading("Creating Team...");
    try {
      const formData = new FormData();
      const { image, ...payload } = data;
      formData.append("file", image);
      formData.append("data", JSON.stringify(payload));
      toast.success("Already get data...", { id: toastId, duration: 2000 });
      console.log(formData);

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
        onClick={() => document.getElementById("create-team-modal").showModal()}
      >
        Create a Slide
      </button>

      <dialog id={"create-team-modal"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-team-modal").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Create a Team
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                resolver={zodResolver(teamValidationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"name"} label={"Name :"} />
                  <KAInput name={"designation"} label={"Designation :"} />
                  <KANumberInput name={"dealCase"} label={"Deal Case :"} />
                  <KAInput
                    type={"email"}
                    name={"contactInfo.email"}
                    label={"Email :"}
                  />
                  <KAInput
                    type={"email"}
                    name={"contactInfo.web_mail"}
                    label={"Web mail :"}
                  />
                  <KAInput name={"contactInfo.phone"} label={"Phone :"} />
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

export default TeamPostForm;
