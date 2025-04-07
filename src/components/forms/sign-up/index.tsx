"use client";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useAuthSignUp } from "@/hooks/authentication";

const SignUpForm = () => {
  const { isPending, onInitiateUserRegistration, register, errors } =
    useAuthSignUp();

  return (
    <form
      className="flex flex-col gap-3 "
      onSubmit={onInitiateUserRegistration}
    >
      {GROUPLE_CONSTANTS.signUpForm.map((field) => (
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
