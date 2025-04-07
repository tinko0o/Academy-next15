"use client";
import { Button } from "@/components/ui/button";
import { useOAuth } from "@/hooks/authentication";
import { Apple, Google } from "@/icons";
const AuthButton = () => {
  const { signInWithGoogle } = useOAuth();
  return (
    <div className="flex flex-col gap-4">
      <Button variant="outline" className="w-full">
        <Apple />
        Login with Apple
      </Button>
      <Button onClick={signInWithGoogle} variant="outline" className="w-full">
        <Google />
        Login with Google
      </Button>
    </div>
  );
};

export default AuthButton;
