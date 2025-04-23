import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
type SubItem = {
  title: string;
  url: string;
  shortcut?: string;
  label?: string;
  subItems?: SubItem[];
};
type ItemDropdownData = {
  title: string;
  url: string;
  shortcut?: string;
  label?: string;
  subItems: SubItem[];
};
type ItemDropdownProps = {
  title: string;
  label?: string;
  className?: string;
  type: "dropdown" | "sidebar";
  data: ItemDropdownData[];
};
const ItemDropdown = ({
  title,
  label,
  className,
  data,
  type,
}: ItemDropdownProps) => {
  switch (type) {
    case "dropdown":
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild className={cn("mx-2", className)}>
            <Button variant={"ghost"}>{title}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-60 min-h-56" sideOffset={4}>
            <DropdownMenuGroup>
              {label && (
                <>
                  <DropdownMenuLabel className="text-sm font-bold">
                    {label}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              )}
              {data.map((item) => (
                //
                <DropdownMenuSub key={item.url}>
                  <DropdownMenuSubTrigger>
                    <Link href={item.url}>
                      {item.title}
                      <DropdownMenuShortcut>
                        {item?.shortcut}
                      </DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="min-w-56 min-h-56">
                      {item.label && (
                        <>
                          <DropdownMenuLabel className="text-sm font-bold">
                            {item.label}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                        </>
                      )}
                      {item.subItems.map((subItem) => (
                        //
                        <DropdownMenuSub key={subItem.title}>
                          <DropdownMenuSubTrigger>
                            <Link href={subItem.url}>
                              {subItem.title}
                              <DropdownMenuShortcut>
                                {subItem?.shortcut}
                              </DropdownMenuShortcut>
                            </Link>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="min-w-56 min-h-56">
                              {subItem.label && (
                                <>
                                  <DropdownMenuLabel className="text-sm font-bold">
                                    {subItem.label}
                                  </DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                </>
                              )}
                              {subItem.subItems?.map((subItem) => (
                                //
                                <DropdownMenuItem key={subItem.title}>
                                  <Link href={subItem.url}>
                                    {subItem.title}
                                    <DropdownMenuShortcut>
                                      {subItem?.shortcut}
                                    </DropdownMenuShortcut>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "sidebar":
      return (
        data &&
        data.map((item) => (
          <Sheet key={item.url}>
            <SheetTrigger asChild aria-label="Mobile item Menu ">
              <Button
                className={cn("w-full justify-start cursor-pointer", className)}
                variant={"ghost"}
              >
                <ChevronLeft size={10} />
                {item.title}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader
                clickClose
                className="cursor-pointer border-b border-gray-200"
              >
                <SheetTitle>Categrori</SheetTitle>
              </SheetHeader>

              <div className=" w-full flex flex-col p-2">
                {item.subItems.map((subItem) => (
                  <Link key={subItem.url} href={subItem.url}>
                    <Button
                      variant={"ghost"}
                      className="w-full justify-start cursor-pointer"
                    >
                      {subItem.title}
                    </Button>
                    {/* {subItem?.shortcut} */}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ))
      );
    // <Collapsible>
    //   <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    //   <CollapsibleContent>
    //     Yes. Free to use for personal and commercial projects. No
    //     attribution required.
    //   </CollapsibleContent>
    // </Collapsible>

    default:
      return null;
  }
};

export default ItemDropdown;
