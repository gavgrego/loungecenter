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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <InstantSearch indexName="lounge" searchClient={searchClient}>
      <div className="flex flex-col gap-4 w-full relative">
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
          <div className="p-4 rounded shadow-lg absolute top-12 w-full z-50 bg-white">
            <Hits
              className="max-w-[800px] "
              hitComponent={({ hit }: { hit: LoungeHit }) => (
                <div className="[&:not(:last-of-type)]:mt-4">
                  <Link color="secondary" href={hit.url}>
                    {hit.airport?.Code} - &nbsp;<strong>{hit.name}</strong>
                  </Link>
                </div>
              )}
            />
          </div>
        ) : null}
      </div>
    </InstantSearch>
  );
};

export default Search;
