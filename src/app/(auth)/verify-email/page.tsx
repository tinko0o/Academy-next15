"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { XCircle } from "lucide-react";
import { useVerifyEmail } from "@/hooks/authentication";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    mutate: verifyEmail,
    isPending,
    isSuccess,
    isError,
    data,
    error,
  } = useVerifyEmail();

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token, verifyEmail]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Verify Email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {isPending ? (
            <Loader2 className="animate-spin w-6 h-6 mx-auto text-gray-500" />
          ) : isError ? (
            <div className="flex flex-col items-center space-y-2">
              <XCircle className="w-10 h-10 text-red-500" />
              <p className="text-red-500 font-medium">
                {(error as Error)?.message || "Something went wrong"}
              </p>
              <Button variant="outline" onClick={() => verifyEmail(token!)}>
                Try Again
              </Button>
              <Button>
                <Link href={"/sign-in"}>Go Back Login</Link>
              </Button>
            </div>
          ) : isSuccess && data?.success ? (
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <p className="text-green-500 font-medium">{data.message}</p>
              <Button>
                <Link href={"/sign-in"}>Go To Login</Link>
              </Button>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
