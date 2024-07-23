"use client";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

import SearchInput from "./searchInput";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ""
);

const Search = ({ ...props }) => {
  return (
    <InstantSearch indexName="lounge" searchClient={searchClient}>
      <SearchInput {...props} />
    </InstantSearch>
  );
};

export default Search;
