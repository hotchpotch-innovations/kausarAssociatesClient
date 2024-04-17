"use client";
import KAForm from "@/components/forms/KAForm";
import KASubmitButton from "@/components/forms/buttons/KASubmitButton";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KATextArea from "@/components/forms/inputs/KATextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import React from "react";
import { z } from "zod";

const validationSchema = z.object({
  main: z
    .object({
      title: z.string({ required_error: "Title is required" }).optional(),
      subtitle: z.string({ required_error: "Subtitle is required" }).optional(),
      desc: z.string({ required_error: "Description is required" }).optional(),
      body: z.string({ required_error: "Body is required" }).optional(),
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

const ServiceUpdateForm = () => {
  const params = useParams();
  console.log(params);

  const defaultValue = {
    // main: {
    //   title: "This is title",
    // },
  };

  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0">
      <KAForm
        onSubmit={submitHandler}
        resolver={zodResolver(validationSchema)}
        defaultValues={defaultValue}
      >
        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Main Service Section (required):
            </legend>
            <KAInput name={"main.title"} label={"Service Title:"} />
            <KAInput name={"main.subtitle"} label={"Service Subtitle:"} />
            <KATextArea name={"main.desc"} label={"Service Description:"} />
            <KATextArea
              name={"main.body"}
              label={"Service Expertise & Supports:"}
              span={"(provide by paragraph)"}
            />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Extra Service Section (optional):
            </legend>
            <KAInput name={"extra.first.title"} label={"Service Title:"} />
            <KATextArea
              name={"extra.first.desc"}
              label={"Service Description:"}
            />
            <KAInput name={"extra.second.title"} label={"Service Title:"} />
            <KATextArea
              name={"extra.second.desc"}
              label={"Service Description:"}
            />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Service Images Section (required)::
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

export default ServiceUpdateForm;
