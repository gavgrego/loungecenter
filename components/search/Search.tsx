"use client";

import { Hits, InstantSearch, Highlight } from "react-instantsearch";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

import SearchInput from "./searchInput";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: `${process.env.TYPESENSE_SEARCH_API_KEY}`,
    nodes: [
      {
        host: "localhost",
        port: 8108,
        protocol: "http",
      },
    ],
    cacheSearchResultsForSeconds: 24 * 60 * 60,
  },
  additionalSearchParameters: {
    query_by: "name",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

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
        <InstantSearch
          indexName="lounge"
          initialUiState={undefined}
          searchClient={searchClient}
        >
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
