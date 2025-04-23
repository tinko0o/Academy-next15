import { SignInUpButton } from "@/components/global/button";
import ItemDropdown from "@/components/global/item-dropdown";
import { itemDropdownData } from "@/components/global/item-dropdown/data";
import UserDropdownMenu from "@/components/global/user-dropdown-menu";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { User } from "@/types";
import { AlignJustify } from "lucide-react";

type SideBarProps = {
  user?: User;
};
export const SidebarMobie = ({ user }: SideBarProps) => {
  const data = itemDropdownData;

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Mobile Menu"
        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden"
      >
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="w-[300px] md:w-[400px] gap-1">
        <SheetHeader>
          <SheetTitle>{user?.fullName || ""}</SheetTitle>
          {user ? (
            <UserDropdownMenu user={user} type="sidebar" />
          ) : (
            <SignInUpButton
              className="gap-1 flex-col w-full "
              classNameButton="w-full rounded-none shadow-none justify-start bg-white hover:bg-accent hover:text-accent-foreground"
            />
          )}
        </SheetHeader>
        <ItemDropdown type="sidebar" title="Explore" data={data} />
      </SheetContent>
    </Sheet>
  );
};
