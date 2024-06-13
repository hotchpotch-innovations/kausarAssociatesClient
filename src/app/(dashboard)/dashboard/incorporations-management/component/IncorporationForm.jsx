"use client";
import KAForm from "@/components/forms/KAForm";
import KASubmitButton from "@/components/forms/buttons/KASubmitButton";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KATextArea from "@/components/forms/inputs/KATextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  main: z.object({
    title: z.string({ required_error: "Title is required" }),
    subtitle: z.string({ required_error: "Subtitle is required" }),
    desc: z.string({ required_error: "Description is required" }),
  }),
  extra: z.object({
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
  }),
  images: z.object({
    banner: z.object({}),
    body: z.object({}),
  }),
});

const IncorporationForm = () => {
  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0">
      <KAForm onSubmit={submitHandler} resolver={zodResolver(validationSchema)}>
        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Main Incorporation Section (required):
            </legend>
            <KAInput name={"main.title"} label={"Incorporation Title:"} />
            <KAInput name={"main.subtitle"} label={"Incorporation Subtitle:"} />
            <KATextArea
              name={"main.desc"}
              label={"Incorporation Description:"}
            />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Extra Incorporation Section (optional):
            </legend>
            <KAInput
              name={"extra.first.title"}
              label={"Incorporation Title 1:"}
            />
            <KATextArea
              name={"extra.first.desc"}
              label={"Incorporation Description 1:"}
            />
            <KAInput
              name={"extra.second.title"}
              label={"Incorporation Title 2:"}
            />
            <KATextArea
              name={"extra.second.desc"}
              label={"Incorporation Description 2:"}
            />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Incorporation Images Section (required)::
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

export default IncorporationForm;
