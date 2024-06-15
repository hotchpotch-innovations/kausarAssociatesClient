"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAInput from "@/components/forms/inputs/KAInput";
import KANumberInput from "@/components/forms/inputs/KANumberInput";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const clientValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  dealCase: z.number({ required_error: "Deal case is required" }).optional(),
  contactInfo: z.object({
    email: z.string({ required_error: "Email is required" }),
    phone: z.string({ required_error: "Phone number is required" }),
    address: z.string({ required_error: "Address is required" }),
  }),
  image: z.object({}),
});

const ClientPostForm = () => {
  const submitHandler = async (data) => {
    const toastId = toast.loading("Creating client...");
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
        onClick={() =>
          document.getElementById("create-client-modal").showModal()
        }
      >
        Create a Client
      </button>

      <dialog id={"create-client-modal"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-client-modal").close()
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
                resolver={zodResolver(clientValidationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"name"} label={"Name :"} />
                  <KANumberInput name={"dealCase"} label={"Deal Case :"} />
                  <KAInput
                    type={"email"}
                    name={"contactInfo.email"}
                    label={"Email :"}
                  />
                  <KAInput name={"contactInfo.phone"} label={"Phone :"} />
                  <KAInput name={"contactInfo.address"} label={"Address :"} />
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

export default ClientPostForm;
