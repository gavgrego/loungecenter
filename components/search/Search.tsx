"use client";

import { Hits, InstantSearch, UseSearchBoxProps } from "react-instantsearch";
import { liteClient as algoliasearch } from "algoliasearch/lite";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);
import { Link } from "@nextui-org/link";
import SearchInput from "./searchInput";
import { useState } from "react";
import { LoungeHit } from "@/types/search/types";
import { InputProps } from "@nextui-org/input";

type SearchProps = UseSearchBoxProps & InputProps;

const Search = ({ className, placeholder }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`flex justify-center ${className}`}>
      <InstantSearch indexName="lounge" searchClient={searchClient}>
        <div className="flex flex-col gap-4 w-full max-w-[800px] relative">
          <div className="flex flex-col gap-4">
            <SearchInput
              onFocus={() => setIsOpen(true)}
              //
              // figure out how to appropriately fire the Link's onClick event prior to the onBlur event, this is disgusting
              //
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 500);
              }}
              placeholder={placeholder}
            />
          </div>
          {isOpen ? (
            <div className="p-4 rounded-md shadow-lg absolute top-12 w-full z-50 bg-foreground-50">
              <Hits
                className="max-w-[800px]"
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
    </div>
  );
};

export default Search;
