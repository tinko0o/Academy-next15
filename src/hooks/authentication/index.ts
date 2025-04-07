// import { onSignUpUser } from "@/actions/auth"
import { SignUpSchema } from "@/components/forms/sign-up/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SignInSchema } from "../../components/forms/sign-in/schema";
import { useState } from "react";

import { ApiResponse } from "@/types";
import { useRouter } from "next/navigation";
import { onSignIn } from "@/actions/auth";

export const useAuthSignIn = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: InitiateLoginFlow, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      onSignIn(email, password),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Authentication failed");
        return;
      }
      queryClient.setQueryData(["authUser"], data.user);
      localStorage.setItem("access_token", data.accessToken);
      reset();

      toast("Success", {
        description: "Welcome!",
      });
      router.push("/");
    },
  });

  const onAuthenticateUser = handleSubmit(async (values) => {
    InitiateLoginFlow({ email: values.email, password: values.password });
  });

  return {
    onAuthenticateUser,
    isPending,
    register,
    errors,
  };
};

export const useAuthSignUp = () => {
  const [isPending, setIsPending] = useState<true | false>(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const onRegisterUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      if (!email || !password || !firstName || !lastName) {
        return toast("Error", {
          description: "No fields must be empty",
        });
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );

      if (response.status === 201) {
        reset();
        //
        toast("Success", {
          description: "Welcome!",
        });
        router.push(`/sign-in`);
      } else {
        toast.error("Authentication failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onInitiateUserRegistration = handleSubmit(async (values) => {
    setIsPending(true);
    onRegisterUser(
      values.firstname,
      values.lastname,
      values.email,
      values.password
    );
    setIsPending(false);
  });

  return {
    isPending,
    register,
    errors,
    onInitiateUserRegistration,
    getValues,
  };
};

export const useVerifyEmail = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const verifyEmail = async (verifyToken: string | null) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verifyToken }),
        }
      );

      const data: ApiResponse<null> = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
        data: null,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, verifyEmail };
};

export const useOAuth = () => {
  const googleOAuthUrl =
    `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google` || "";

  const signInWithGoogle = () => {
    window.location.href = googleOAuthUrl;
  };

  const signInWithApple = () => {
    // URL OAuth Apple
  };

  return { signInWithGoogle, signInWithApple };
};

import { useQuery } from "@tanstack/react-query";

export const useAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Chưa đăng nhập");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Phiên đăng nhập hết hạn");
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 phút
  });
};
