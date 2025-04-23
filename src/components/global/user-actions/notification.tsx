import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Bell, Settings } from "lucide-react";
import Link from "next/link";

export const NotificationAction = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button
          aria-label="Notification"
          title="Notification"
          variant={"ghost"}
          size={"icon"}
        >
          <Bell className="size-5" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className=" w-[300px] p-0 overflow-hidden">
        <div className="flex flex-col gap-2">
          <div className=" flex items-center justify-between">
            <p className=" ml-2 text-sm font-bold">Notification</p>
            <Link href="#">
              <Button variant={"ghost"} className="p-0">
                <Settings className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="w-full flex items-center justify-between">
            <Button className="rounded-none w-1/2" variant={"ghost"}>
              Teacher
            </Button>
            <Button className="rounded-none w-1/2" variant={"ghost"}>
              Student
            </Button>
          </div>
          <Separator />
          <div className="text-center py-3">
            <p className="text-sm text-gray-500">No notification</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
