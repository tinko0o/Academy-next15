"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

type SignInUpButtonProps = {
  showSignIn?: boolean;
  showSignUp?: boolean;
  className?: string;
  classNameButton?: string;
};

export const SignInUpButton = ({
  showSignIn = true,
  showSignUp = true,
  className = "",
  classNameButton = "",
}: SignInUpButtonProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      {showSignIn && (
        <ButtonLink
          className={cn(classNameButton)}
          href="/sign-in"
          variant="ghost"
          size="lg"
        >
          Sign In
        </ButtonLink>
      )}

      {showSignUp && (
        <ButtonLink
          className={cn(classNameButton)}
          href="/sign-up"
          variant="secondary"
          size="lg"
        >
          Sign Up
        </ButtonLink>
      )}
    </div>
  );
};
