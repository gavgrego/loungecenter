"use client";
import { Input, InputProps } from "@nextui-org/input";
import {
  useInstantSearch,
  useSearchBox,
  UseSearchBoxProps
} from "react-instantsearch";
import { useState, useRef } from "react";

import { SearchIcon } from "../icons";

type SearchInputProps = UseSearchBoxProps & InputProps;

const SearchInput = ({ ...props }: SearchInputProps) => {
  const { refine, query } = useSearchBox();
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const setQuery = (newQuery: string) => {
    setInputValue(newQuery);

    refine(newQuery);
  };

  return (
    <Input
      ref={inputRef}
      aria-label="Search"
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      classNames={{
        inputWrapper: "bg-default-100 w-full",
        input: "text-sm"
      }}
      labelPlacement="outside"
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={inputValue}
      onChange={(event) => {
        setQuery(event.currentTarget.value);
      }}
      {...props}
    />
  );
};

export default SearchInput;
