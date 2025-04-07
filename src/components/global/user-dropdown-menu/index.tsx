"use client";

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
import { UserCard } from "../user-card";
import { User } from "@/types";
import { Separator } from "@/components/ui/separator";

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
  switch (type) {
    case "dropdown":
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={cn(
              "focus:outline-none mx-3 hidden md:flex items-center justify-center",
              className
            )}
          >
            <Avatar className="w-8 h-8 rounded-full border border-gray-300">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>TN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-auto max-w-72 hidden md:block bg-white shadow-lg rounded-lg p-2"
          >
            <DropdownMenuLabel className="font-semibold text-gray-700">
              <UserCard user={user} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem className="hover:bg-gray-100 rounded-md px-2 py-1">
              Học tập
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 rounded-md px-2 py-1">
              Giỏ hàng của tôi
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 rounded-md px-2 py-1">
              Mong muốn
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 rounded-md px-2 py-1">
              Bảng điều khiển của giảng viên
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem className="text-red-500 hover:bg-red-100 rounded-md px-2 py-1">
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "sidebar":
      return (
        <div className={cn("focus:outline-none mx-3", className)}>
          <UserCard user={user} />
          <Separator className="my-4" />
          <div className="mt-4 space-y-2">
            <div className="text-gray-700 hover:text-black cursor-pointer">
              Học tập
            </div>
            <div className="text-gray-700 hover:text-black cursor-pointer">
              Giỏ hàng của tôi
            </div>
            <div className="text-gray-700 hover:text-black cursor-pointer">
              Mong muốn
            </div>
            <div className="text-gray-700 hover:text-black cursor-pointer">
              Bảng điều khiển của giảng viên
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="text-red-500 hover:text-red-700 cursor-pointer">
              Đăng xuất
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
