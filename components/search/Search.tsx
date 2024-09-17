"use client";

import { Hits, InstantSearch } from "react-instantsearch";

import { liteClient as algoliasearch } from "algoliasearch/lite";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);
import { Link } from "@nextui-org/link";
import SearchInput from "./searchInput";
import { useState } from "react";
import { LoungeHit } from "@/types/search/types";

const Search = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InstantSearch indexName="lounge" searchClient={searchClient}>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4">
          <SearchInput
            onFocus={() => setIsOpen(true)}
            //
            // figure out how to appropriately fire the Link's onClick event prior to the onBlur event, this is disgusting
            //
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 100);
            }}
            {...props}
          />
        </div>
        {isOpen ? (
          <Hits
            hitComponent={({ hit }: { hit: LoungeHit }) => (
              <Link color="secondary" href={hit.url}>
                {hit.airport?.Code} - {hit.name}
              </Link>
            )}
            className="max-w-[800px]"
          />
        ) : null}
      </div>
    </InstantSearch>
  );
};

export default Search;
