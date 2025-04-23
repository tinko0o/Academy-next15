"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type ButtonLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    className?: string;
  };

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Link {...props} passHref legacyBehavior>
        <Comp
          ref={ref}
          data-slot="button-link"
          {...props}
          className={cn(buttonVariants({ variant, size }), className)}
        />
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
