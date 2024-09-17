"use client";

import { Hits, InstantSearch, Highlight } from "react-instantsearch";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

import SearchInput from "./searchInput";
import { useState } from "react";

// TODO: Need to type out the results at some point
const Hit = ({ hit }: any) => {
  return (
    <DropdownItem key={hit}>
      <h3>
        <Highlight attribute="airport.name" hit={hit} />
        <a href={hit.url}>{hit.name}</a>
      </h3>
    </DropdownItem>
  );
};

const Search = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InstantSearch
      initialUiState={undefined}
      indexName="lounge"
      searchClient={searchClient}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 max-w-[800px] w-full">
          <SearchInput
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            {...props}
          />
        </div>
        {isOpen ? <Hits /> : null}
      </div>
    </InstantSearch>
  );
};

export default Search;
