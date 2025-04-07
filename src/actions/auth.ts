import { ApiResponse, User } from "@/types";

interface SignInPayload {
  email: string;
  password: string;
}

export const onSignIn = async (email: string, password: string) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password } as SignInPayload),
    });

    if (!response.ok) {
      throw new Error(`Error during sign-in: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      user: data.data.user as User,
      accessToken: data.data.access_token as string,
    };
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};
