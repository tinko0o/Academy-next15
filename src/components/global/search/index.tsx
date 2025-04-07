"use client";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

type Props = {
  className?: string;
  inputStyle?: string;
  placeholder?: string;
  searchType?: "GROUPS" | "POSTS";
  iconStyle?: string;
  glass?: boolean;
};

const Search = ({
  searchType,
  className,
  glass,
  iconStyle,
  inputStyle,
  placeholder,
}: Props) => {
  // const { query, onSearchQuery } = useSearch(searchType)

  return (
    <div
      className={cn(
        "border-2 flex gap-2 items-center rounded-full py-1 px-3",
        className,
        glass &&
          "bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-20"
      )}
    >
      <label htmlFor="input">
        <SearchIcon className={cn(iconStyle || "text-themeTextGray")} />
      </label>
      <Input
        id="input"
        onChange={() => {}}
        value={""}
        className={cn(
          "bg-transparent border-0 focus-visible:ring-0 p-0",
          inputStyle
        )}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Search;
