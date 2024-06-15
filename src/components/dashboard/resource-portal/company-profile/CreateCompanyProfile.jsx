"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import "react-quill/dist/quill.snow.css";

const validationSchema = z.object({
  title: z.string(),
  profile: z.object({}),
  file: z.object({}),
});

const CreateCompanyProfile = () => {
  const submitHandler = async (data) => {
    console.log(data);
    // const toastId = toast.loading("Creating category...");
    // try {
    //   toast.success("get data...", { id: toastId, duration: 2000 });
    //   location.reload();
    //   document.getElementById("create-company-profile").close();

    //   // const res = await createSeller(formData).unwrap();
    //   // console.log(res);
    //   // toast.success(res.message, { id: toastId, duration: 2000 });
    // } catch (error) {
    //   toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    //   console.log(error);
    // }
  };

  return (
    <>
      <button
        className={"px-2 py-1 my-4 border bg-primary text-white rounded"}
        onClick={() =>
          document.getElementById("create-company-profile").showModal()
        }
      >
        Create Company Profile
      </button>

      <dialog id={"create-company-profile"} className="modal">
        <div className="modal-box bg-blue-200">
          <div method="dialog">
            {/* Close Button  */}
            <div>
              <button
                onClick={() =>
                  document.getElementById("create-company-profile").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </div>
            {/* heading */}
            <div className="mt-6">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                Create Blog Category
              </h2>
            </div>

            <div>
              <KAForm
                onSubmit={submitHandler}
                resolver={zodResolver(validationSchema)}
              >
                <KAFormContainer>
                  <KAInput name={"title"} label={"Profile Title:"} />
                  <KAFileInput name={"profile"} label={"Profile Image:"} />

                  <KAFileInput
                    name={"file"}
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

export default CreateCompanyProfile;
