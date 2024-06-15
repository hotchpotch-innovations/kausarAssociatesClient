"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAInput from "@/components/forms/inputs/KAInput";
import KANumberInput from "@/components/forms/inputs/KANumberInput";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
// import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiFillEdit } from "react-icons/ai";

const clientValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }).optional(),
  dealCase: z
    .number({ required_error: "Deal case is required" })
    .optional()
    .optional(),
  contactInfo: z.object({
    email: z.string({ required_error: "Email is required" }).optional(),
    phone: z.string({ required_error: "Phone number is required" }).optional(),
    address: z.string({ required_error: "Address is required" }).optional(),
  }),
  image: z.object({}).optional(),
});

const ClientUpdateForm = ({ modalId, data }) => {
  //   console.log(data);

  const defaultValues = {
    ...data,
    // name: data?.name,
    // dealCase: data?.dealCase,
    // image: data?.image,
    // contactInfo: {
    //   email: data?.contactInfo?.email,
    //   phone: data?.contactInfo?.phone,
    //   address: data?.contactInfo?.address,
    // },
  };

  const submitHandler = async (data) => {
    // const toastId = toast.loading("Creating client...");
    console.log({ data });
    try {
      //   const formData = new FormData();
      //   const { image, ...payload } = data;
      //   formData.append("file", image);
      //   formData.append("data", JSON.stringify(payload));
      //   toast.success("Already get data...", { id: toastId, duration: 2000 });
      //   console.log(formData);
      // const res = await createSeller(formData).unwrap();
      // console.log(res);
      document.getElementById(modalId).close();
      // toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      //   toast.error("Something went wrong!", { id: toastId, duration: 2000 });
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
                resolver={zodResolver(clientValidationSchema)}
              >
                <KAFormContainer>
                  <KAInput
                    name={"name"}
                    label={"Name :"}
                    defaultValue={data?.name}
                  />
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

export default ClientUpdateForm;
