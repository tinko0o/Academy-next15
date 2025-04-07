"use client";

import { useEffect, useState } from "react";
import { useVerifyEmail } from "@/hooks/authentication";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApiResponse } from "@/types";
import Link from "next/link";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [message, setMessage] = useState<
    Omit<ApiResponse<null>, "statusCode" | "data">
  >({
    success: false,
    message: "Failed to verify email.",
    error: "",
  });
  const { isLoading, verifyEmail } = useVerifyEmail();
  useEffect(() => {
    verifyEmail(token)
      .then((result) => {
        setMessage(result);
      })
      .catch((error) => {
        setMessage({
          success: false,
          message: "Something went wrong",
          error: error instanceof Error ? error.message : "Unknown error",
        });
      });
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Verify Email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {isLoading ? (
            <Loader2 className="animate-spin w-6 h-6 mx-auto text-gray-500" />
          ) : !message.success ? (
            <div className="flex flex-col items-center space-y-2">
              <XCircle className="w-10 h-10 text-red-500" />
              <p className="text-red-500 font-medium">{message.error}</p>
              <Button
                variant="outline"
                // onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
              <Button>
                <Link href={"/sign-in"}>Go Back Login</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <p className="text-green-500 font-medium">{message.message}</p>
              <Button>
                <Link href={"/sign-in"}>Go To Login</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
