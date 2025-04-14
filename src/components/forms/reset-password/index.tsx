"use client";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { CONSTANTS } from "@/constants";
import { useResetPassword } from "@/hooks/authentication";
import { useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { errors, register, isPending, handleResetPassword } = useResetPassword(
    token ?? ""
  );

  return (
    <form className="flex flex-col gap-3 " onSubmit={handleResetPassword}>
      {CONSTANTS.resetPasswordForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="rounded-2xl">
        <Loader loading={isPending}>Reset Password</Loader>
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
