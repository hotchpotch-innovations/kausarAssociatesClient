"use client";
import KAForm from "@/components/forms/KAForm";
import KASubmitButton from "@/components/forms/buttons/KASubmitButton";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAFileInput from "@/components/forms/inputs/KAFileInput";
import KAInput from "@/components/forms/inputs/KAInput";
import KASelect from "@/components/forms/inputs/KASelect";
import KATextArea from "@/components/forms/inputs/KATextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";

const validationSchema = z.object({});

const languageOptions = [
  {
    label: "Bangla",
    value: "bangle",
  },
  {
    label: "English",
    value: "english",
  },
];

const categoryOptions = [
  {
    label: "A",
    value: "a",
  },
  {
    label: "B",
    value: "b",
  },
];

const CompanyNewsForm = () => {
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0">
      <KAForm onSubmit={submitHandler} resolver={zodResolver(validationSchema)}>
        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Content Form Section (required):
            </legend>
            <KASelect
              name={""}
              label={"Select Language:"}
              options={languageOptions}
            />
            <KASelect
              name={""}
              label={"Select Category:"}
              options={categoryOptions}
            />
            <KAInput name={""} label={"Title:"} />
            <KATextArea name={""} label={"Description:"} />
          </fieldset>
        </KAFormContainer>

        {/* Extra Blog Section  */}
        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Content Form Section (optional):
            </legend>
            <KATextArea name={""} label={"Paragraph 1:"} />
            <KATextArea name={""} label={"Paragraph 2:"} />
          </fieldset>
        </KAFormContainer>

        <KAFormContainer>
          <fieldset className="border-2  p-4">
            <legend className="font-semibold text-primary">
              Images Section:
            </legend>
            {/* Main Image Field  */}
            <KAFileInput name={""} label={"Select Main Image:"} />

            {/* Body Image 1 Field  */}
            <KAFileInput
              name={""}
              label={"Select Body Image number 1 (optional):"}
            />

            {/* Body Image 2 Field  */}
            <KAFileInput
              name={""}
              label={"Select Body Image number 2 (optional):"}
            />

            {/* Body Image 3 Field  */}
            <KAFileInput
              name={""}
              label={"Select Body Image number 3 (optional):"}
            />
          </fieldset>
        </KAFormContainer>

        {/* Submit Button  */}
        <KASubmitButton title={"post"} />
      </KAForm>
    </div>
  );
};

export default CompanyNewsForm;
