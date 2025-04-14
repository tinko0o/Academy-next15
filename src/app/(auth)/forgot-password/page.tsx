"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthButton from "@/components/global/auth-button";
import Link from "next/link";
import ForgotPasswordForm from "@/components/forms/forgot-password";

const ForgotPasswordPage = () => {
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
                <CardDescription>
                  Login with your Apple or Google account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <AuthButton />
                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                  <ForgotPasswordForm />
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      className="underline underline-offset-4"
                      href={"/sign-in"}
                    >
                      Sign in
                    </Link>
                  </div>
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
};

export default ForgotPasswordPage;
