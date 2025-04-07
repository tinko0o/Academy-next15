import { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className=" w-full flex items-center my-2">
      <Avatar className="size-12">
        <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} />
        <AvatarFallback>
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="ml-3 flex-1 min-w-0">
        <div className="text-base md:text-lg font-medium truncate">
          {user.firstName} {user.lastName}
        </div>
        {user.bio && (
          <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 truncate">
            {user.bio}
          </div>
        )}
      </div>
    </div>
  );
};
