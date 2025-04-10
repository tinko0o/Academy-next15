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
import { useAuthUser } from "@/hooks/authentication";
import { User } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

import { AlignJustify, ShoppingCart } from "lucide-react";
import Link from "next/link";
const NavBar = () => {
  //
  // const queryClient = useQueryClient();
  // const user = queryClient.getQueryData<User>(["authUser"]);
  const { data: user, isLoading, isError, error, refetch } = useAuthUser();
  console.log(user);
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
            {user && <UserDropdownMenu user={user} type="sidebar" />}

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
          <UserDropdownMenu user={user} type="dropdown" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
