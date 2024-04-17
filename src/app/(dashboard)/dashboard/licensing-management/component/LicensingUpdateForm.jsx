"use client";
import KAForm from "@/components/forms/KAForm";
import KASubmitButton from "@/components/forms/buttons/KASubmitButton";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KATextArea from "@/components/forms/inputs/KATextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { z } from "zod";

const validationSchema = z.object({
  main: z
    .object({
      title: z.string({ required_error: "Title is required" }).optional(),
      subtitle: z.string({ required_error: "Subtitle is required" }).optional(),
      desc: z.string({ required_error: "Description is required" }).optional(),
    })
    .optional(),
  extra: z
    .object({
      first: z
        .object({
          title: z.string().optional(),
          disc: z.string().optional(),
        })
        .optional(),
      second: z
        .object({
          title: z.string().optional(),
          disc: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  images: z
    .object({
      banner: z.object({}).optional(),
      body: z.object({}).optional(),
    })
    .optional(),
});

const LicensingUpdateForm = () => {
  const params = useParams();
  console.log(params);

  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0">
      <KAForm onSubmit={submitHandler} resolver={zodResolver(validationSchema)}>
        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Main Licensing Section (required):
            </legend>
            <KAInput name={"main.title"} label={"Licensing Title:"} />
            <KAInput name={"main.subtitle"} label={"Licensing Subtitle:"} />
            <KATextArea name={"main.desc"} label={"Licensing Description:"} />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Extra Licensing Section (optional):
            </legend>
            <KAInput name={"extra.first.title"} label={"Licensing Title 1:"} />
            <KATextArea
              name={"extra.first.desc"}
              label={"Licensing Description 1:"}
            />
            <KAInput name={"extra.second.title"} label={"Licensing Title 2:"} />
            <KATextArea
              name={"extra.second.desc"}
              label={"Licensing Description 2:"}
            />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Licensing Images Section (required)::
            </legend>
            <KAFileInput
              name={"images.banner"}
              label={"Select Banner Image:"}
            />
            <KAFileInput name={"images.body"} label={"Select Body Image:"} />
          </fieldset>
        </KAFormContainer>

        {/* Submit Button  */}
        <KASubmitButton title={"post"} />
      </KAForm>
    </div>
  );
};

export default LicensingUpdateForm;
