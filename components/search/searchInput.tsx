import { Input, type InputProps } from "@nextui-org/input";
import { SearchIcon } from "../icons";

type SearchInputProps = InputProps;

const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 w-full",
        input: "text-sm",
      }}
      labelPlacement="outside"
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      {...props}
    />
  );
};

export default SearchInput;
