"use client";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { CONSTANTS } from "@/constants";
import { useForgotPassword } from "@/hooks/authentication";

const ForgotPasswordForm = () => {
  const { isPending, register, errors, onSubmit } = useForgotPassword();
  return (
    <form className="flex flex-col gap-3 " onSubmit={onSubmit}>
      {CONSTANTS.forgotPasswordForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="rounded-2xl">
        <Loader loading={isPending}>Sign In with Email</Loader>
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
