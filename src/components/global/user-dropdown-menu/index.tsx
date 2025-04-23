import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { User } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { useAuthSignOut } from "@/hooks/authentication";
import { ChevronLeft } from "lucide-react";
import { UserCard } from "../card";

type DropdownItem = {
  label?: string;
  url?: string;
  onClick?: () => void;
  danger?: boolean;
  separator?: boolean;
};

type UserDropdownMenuProps = {
  className?: string;
  user: User;
  type: "dropdown" | "sidebar";
};

export default function UserDropdownMenu({
  className,
  user,
  type,
}: UserDropdownMenuProps) {
  const { signOut } = useAuthSignOut();

  const dropdownItems: DropdownItem[] = [
    {
      label: "Học tập",
      url: "#",
      onClick: () => console.log("Go to học tập"),
    },
    {
      label: "Giỏ hàng của tôi",
      url: "#",

      onClick: () => console.log("Go to giỏ hàng"),
    },
    {
      label: "Mong muốn",
      url: "#",

      onClick: () => console.log("Go to mong muốn"),
    },
    {
      label: "Bảng điều khiển của giảng viên",
      url: "#",

      onClick: () => console.log("Go to dashboard"),
    },
    { separator: true },
    {
      label: "Đăng xuất",
      url: "#",

      onClick: () => signOut(),
      danger: true,
    },
  ];
  switch (type) {
    case "dropdown":
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            asChild
            className={cn(
              "focus:outline-none mx-3 hidden md:flex items-center justify-center",
              className
            )}
          >
            <Button variant={"ghost"}>
              <Avatar className="w-8 h-8 rounded-full border border-gray-300">
                <AvatarImage src={user.avatar || ""} />
                <AvatarFallback>
                  {user.firstName?.charAt(0) || ""}
                  {user.lastName?.charAt(0) || ""}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-auto max-w-72 hidden md:block bg-white shadow-lg rounded-lg p-2"
          >
            <DropdownMenuLabel className="font-semibold text-gray-700">
              <UserCard user={user} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-2" />
            {dropdownItems.map((item, idx) =>
              item.separator ? (
                <DropdownMenuSeparator key={`sep-${idx}`} className="my-2" />
              ) : (
                <DropdownMenuItem
                  key={item.label}
                  onClick={item.onClick}
                  className={cn(
                    "hover:bg-gray-100 rounded-md px-2 py-1",
                    item.danger && "text-red-500 hover:bg-red-100"
                  )}
                >
                  {item.label}
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "sidebar":
      return (
        <div className={cn("focus:outline-none", className)}>
          <Sheet>
            <SheetTrigger asChild aria-label="Mobile User Menu ">
              <Button className="w-full justify-start !p-0" variant={"ghost"}>
                <ChevronLeft size={10} />
                Menu
                {/* <UserCard user={user} /> */}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader
                clickClose
                className="cursor-pointer border-b border-gray-200"
              >
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className=" space-y-2">
                <div className=" w-full flex flex-col gap-2">
                  {dropdownItems.map((item, idx) =>
                    item.separator ? (
                      <DropdownMenuSeparator
                        key={`sep-${idx}`}
                        className="my-2"
                      />
                    ) : (
                      <Link key={`sep-${idx}`} href={item.url ? item.url : ""}>
                        <Button
                          onClick={item.onClick}
                          className={cn(
                            "w-full justify-start rounded-none cursor-pointer",
                            item.danger &&
                              "text-red-500 hover:bg-red-100 hover:text-red-700"
                          )}
                          variant={"ghost"}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      );
    default:
      return null;
  }
}
