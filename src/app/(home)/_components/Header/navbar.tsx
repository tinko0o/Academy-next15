"use client";
import { useEffect } from "react";
import Search from "@/components/global/search";

import UserDropdownMenu from "@/components/global/user-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuthSignOut } from "@/hooks/authentication";

import { AlignJustify, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserInFor } from "@/hooks/user";

const NavBar = () => {
  const { data: user } = useUserInFor();
  const { signOut } = useAuthSignOut();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const params = new URLSearchParams(window.location.search);
      params.delete("token");
      const newUrl =
        window.location.pathname + (params.toString() ? `?${params}` : "");
      router.replace(newUrl);
    }
  }, [user, router]);
  const dropdownItems: {
    label?: string;
    onClick?: () => void;
    danger?: boolean;
    separator?: boolean;
  }[] = [
    {
      label: "Học tập",
      onClick: () => console.log("Go to học tập"),
    },
    {
      label: "Giỏ hàng của tôi",
      onClick: () => console.log("Go to giỏ hàng"),
    },
    {
      label: "Mong muốn",
      onClick: () => console.log("Go to mong muốn"),
    },
    {
      label: "Bảng điều khiển của giảng viên",
      onClick: () => console.log("Go to dashboard"),
    },
    { separator: true },
    {
      label: "Đăng xuất",
      onClick: () => signOut(),
      danger: true,
    },
  ];
  return (
    <div className="flex w-full items-center justify-between px-4">
      <Search glass={true} placeholder="Search for anything" />
      <Sheet>
        <SheetTrigger
          aria-label="Mobile Menu"
          className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden"
        >
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="dark:bg-black">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            {user && (
              <UserDropdownMenu
                user={user}
                type="sidebar"
                dropdownItems={dropdownItems}
              />
            )}

            {/* <Separator />
            <div className="flex items-center justify-between">
            </div>
            <Separator /> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex items-center justify-end pr-14 lg:pr-0">
        <ShoppingCart width={28} height={28} className="px-1" />
        {!user ? (
          <div className="hidden md:flex items-center">
            <Link className="hidden md:block " href="/sign-in">
              <Button size={"lg"} variant={"ghost"}>
                Sign In
              </Button>
            </Link>
            <Link className="hidden md:block" href="/sign-up">
              <Button
                className="rounded-full"
                size={"lg"}
                variant={"secondary"}
              >
                Sign Up
              </Button>
            </Link>
            <div className="flex items-center">{/*  */}</div>
          </div>
        ) : (
          <UserDropdownMenu
            user={user}
            type="dropdown"
            dropdownItems={dropdownItems}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
