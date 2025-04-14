"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import ResetPasswordForm from "@/components/forms/reset-password";

export default function ResetPasswordPage() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 dark:bg-gray-dark bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">
                  <Link href={"/"}>AkADEMY</Link>
                </CardTitle>
                <CardDescription>Reset your password</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <ResetPasswordForm />
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    className="underline underline-offset-4"
                    href={"/sign-in"}
                  >
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
