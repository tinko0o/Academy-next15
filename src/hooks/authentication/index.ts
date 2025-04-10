// import { onSignUpUser } from "@/actions/auth"
import { SignUpSchema } from "@/components/forms/sign-up/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SignInSchema } from "../../components/forms/sign-in/schema";

import { ApiResponse, User } from "@/types";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/utils";
import { CONSTANTS } from "@/constants";

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

  const { mutate: InitiateLoginFlow, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await apiRequest<{ access_token: string }>(
        "POST",
        CONSTANTS.api.AUTH.LOGIN,
        {
          email,
          password,
        }
      );
    },

    onSuccess: (data) => {
      localStorage.setItem("access_token", data.data?.access_token || "");
      reset();
      toast.success(data.message);
      router.push("/");
    },
    onError: (err: unknown) => {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      toast.error(errorMessage);
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
  const signUp = (values: z.infer<typeof SignUpSchema>) =>
    apiRequest<ApiResponse<null>>("POST", CONSTANTS.api.AUTH.REGISTER, values);

  const { mutate: InitiateUserRegistration, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      router.push("/sign-in");
    },
    onError: (error: ApiResponse<null>) => {
      toast.error(error.message);
    },
  });
  const onSubmit = handleSubmit((values) => {
    InitiateUserRegistration(values);
  });

  return {
    isPending,
    register,
    errors,
    onSubmit,
    getValues,
  };
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (verifyToken: string) =>
      apiRequest<null>("POST", CONSTANTS.api.AUTH.VERIFY_EMAIL, {
        verifyToken,
      }),
  });
};

export const useOAuth = () => {
  const googleOAuthUrl = (CONSTANTS.api.OAUTH2.GOOGLE as string) || "";

  const signInWithGoogle = () => {
    window.location.href = googleOAuthUrl;
  };

  const signInWithApple = () => {
    // URL OAuth Apple
  };

  return { signInWithGoogle, signInWithApple };
};

export const useAuthUser = () => {
  return useQuery<User>({
    queryKey: ["authUser"],
    queryFn: async () => {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("Chưa đăng nhập");

      const res = await apiRequest<User>(
        "GET",
        CONSTANTS.api.USER.INFORMATION,
        undefined,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!res.success || !res.data) {
        throw new Error(res.message || "Phiên đăng nhập hết hạn");
      }

      return res.data;
    },
    staleTime: 1000 * 60 * 5, // 5 phút
  });
};
