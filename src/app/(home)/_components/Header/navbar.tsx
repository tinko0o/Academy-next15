"use client";
import { useEffect } from "react";
import Search from "@/components/global/search";

import UserDropdownMenu from "@/components/global/user-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUserInFor } from "@/hooks/user";
import ItemDropdown from "@/components/global/item-dropdown";
import { itemDropdownData } from "@/components/global/item-dropdown/data";
import {
  CartAction,
  WishlistAction,
  NotificationAction,
} from "@/components/global/user-actions";
import { SidebarMobie } from "./sidebar-mobie";
import { SignInUpButton } from "@/components/global/button";

const NavBar = () => {
  const { data: user } = useUserInFor();
  const router = useRouter();
  const data = itemDropdownData;
  useEffect(() => {
    if (user) {
      const params = new URLSearchParams(window.location.search);
      params.delete("token");
      const newUrl =
        window.location.pathname + (params.toString() ? `?${params}` : "");
      router.replace(newUrl);
    }
  }, [user, router]);

  return (
    <div className="flex w-full items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <ItemDropdown
          type="dropdown"
          title="Explore"
          data={data}
          className="hidden md:block"
        />
        <Search glass={true} placeholder="Search for anything" />
      </div>
      <SidebarMobie user={user} />
      <div className="flex items-center justify-end lg:pr-0">
        {!user ? (
          <SignInUpButton className="hidden md:flex gap-1" />
        ) : (
          <>
            <div className="hidden md:flex  items-center gap-1">
              <Button aria-label="Teacher" title="Teacher" variant={"ghost"}>
                Teacher
              </Button>
              <NotificationAction />
              <WishlistAction />
              <CartAction />
            </div>
            <UserDropdownMenu user={user} type="dropdown" />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
