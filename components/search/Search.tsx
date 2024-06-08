"use client";

import SearchInput from "./searchInput";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ""
);

const Search = () => {
  return (
    <InstantSearch indexName="YourIndexName" searchClient={searchClient}>
      <SearchInput />
    </InstantSearch>
  );
};

export default Search;
