import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const KAForm = ({ onSubmit, children, defaultValues, resolver }) => {
  const formConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);

  const submitHandler = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default KAForm;
