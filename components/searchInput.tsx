import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { FC } from "react";

const SearchInput: FC = () => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 w-full",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};

export default SearchInput;
