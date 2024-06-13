"use client";
import KAForm from "@/components/forms/KAForm";
import KAFormContainer from "@/components/forms/form-styles/KAFormContainer";
import KAInput from "@/components/forms/inputs/KAInput";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useState } from "react";
import { z } from "zod";

const ReactJodit = dynamic(
  () => import("@/components/forms/inputs/ReactJodit"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 flex justify-center items-center ">
        <p>Loading...</p>
      </div>
    ),
  }
);

const validationSchema = z.object({
  menu: z.string().optional(),
  desc: z.string().optional(),
});

const TextEditorForm = () => {
  const [content, setContent] = useState();

  console.log(content);

  const submitHandler = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <KAForm onSubmit={submitHandler} resolver={zodResolver(validationSchema)}>
        <KAFormContainer>
          <KAInput name={"menu"} label={"Menu :"} />
          <ReactJodit
            data={content}
            onChange={setContent}
            placeholder={"Start Writing...."}
          />
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 border border-rounded">
              Submit
            </button>
          </div>
        </KAFormContainer>
      </KAForm>
    </div>
  );
};

export default TextEditorForm;
