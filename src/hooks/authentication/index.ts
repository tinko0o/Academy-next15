// import { onSignUpUser } from "@/actions/auth"
import { SignUpSchema } from "@/components/forms/sign-up/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SignInSchema } from "../../components/forms/sign-in/schema";

import { ApiResponse } from "@/types";
import { useRouter } from "next/navigation";
import { apiRequest, apiRequestWithCallbacks } from "@/lib/utils";
import { CONSTANTS } from "@/constants";
import { EmailSchema } from "@/components/forms/forgot-password/schema";
import { ResetPasswordSchema } from "@/components/forms/reset-password/schema";

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

export const useAuthSignOut = () => {
  const queryClient = useQueryClient();
  const { mutate: signOut } = useMutation({
    mutationFn: () =>
      apiRequestWithCallbacks<null>(
        "POST",
        CONSTANTS.api.AUTH.LOGOUT,
        {},
        {
          onSuccess: (data, message) => {
            localStorage.removeItem("access_token");
            queryClient.removeQueries({ queryKey: ["authUser"] });
            toast.success(message);
          },
          onError: (error: string) => {
            toast.error(error);
          },
        }
      ),
  });

  return { signOut };
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

export const useForgotPassword = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    mode: "onBlur",
  });
  const sendResetPasswordEmail = (values: z.infer<typeof EmailSchema>) =>
    apiRequest<ApiResponse<null>>(
      "POST",
      CONSTANTS.api.AUTH.FORGOT_PASSWORD,
      values
    );

  const { mutate: sendForgotPasswordEmail, isPending } = useMutation({
    mutationFn: sendResetPasswordEmail,
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
    onError: (error: ApiResponse<null>) => {
      toast.error(error.message);
    },
  });
  const onSubmit = handleSubmit((values) => {
    sendForgotPasswordEmail(values);
  });

  return {
    onSubmit,
    isPending,
    register,
    errors,
  };
};

export const useResetPassword = (verifyToken: string) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: async ({
      values,
    }: {
      values: z.infer<typeof ResetPasswordSchema>;
    }) =>
      apiRequest<null>("POST", CONSTANTS.api.AUTH.RESET_PASSWORD, {
        ...values,
        verifyToken,
      }),
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      router.push("/sign-in");
    },
    onError: (error: ApiResponse<null>) => {
      toast.error(error.message);
    },
  });
  const handleResetPassword = handleSubmit((values) => {
    resetPassword({ values });
  });

  return { handleResetPassword, isPending, register, errors };
};
