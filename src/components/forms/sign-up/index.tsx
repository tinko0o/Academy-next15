"use client";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { CONSTANTS } from "@/constants";
import { useAuthSignUp } from "@/hooks/authentication";

const SignUpForm = () => {
  const { isPending, register, errors, onSubmit } = useAuthSignUp();
  return (
    <form className="flex flex-col gap-3 " onSubmit={onSubmit}>
      {CONSTANTS.signUpForm.map((field) => (
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

export default SignUpForm;
