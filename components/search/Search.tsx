"use client";

import { Hits, InstantSearch, Highlight, SearchBox } from "react-instantsearch";
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

console.log(searchClient);
import SearchInput from "./searchInput";

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
  return (
    <Dropdown>
      <DropdownTrigger>
        <InstantSearch indexName="lounge" searchClient={searchClient}>
          <div className="flex flex-col gap-4 max-w-[800px] w-full">
            <SearchInput {...props} />
          </div>
        </InstantSearch>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <Hits hitComponent={Hit} />
      </DropdownMenu>
    </Dropdown>
  );
};

export default Search;
