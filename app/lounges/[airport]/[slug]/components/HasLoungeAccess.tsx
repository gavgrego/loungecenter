import {
  LoungeAllianceAccessDataItem,
  LoungeCardsDataItem
} from "@/data/api/documentation";
import { Tooltip } from "@nextui-org/react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

type HasLoungeAccessProps = {
  hasMatchingCard: boolean;
  matchingCards: LoungeCardsDataItem[];
  hasMatchingAlliance: boolean;
  matchingAlliances: LoungeAllianceAccessDataItem[];
  hasPriorityPass: boolean;
};

const HasLoungeAccess = ({
  hasMatchingAlliance,
  matchingAlliances,
  matchingCards,
  hasMatchingCard,
  hasPriorityPass
}: HasLoungeAccessProps) => {
  return (
    <Tooltip
      closeDelay={100}
      content={
        <div className="text-center">
          <p className="font-medium">You have access to this lounge:</p>
          <ul>
            {hasMatchingCard ? (
              <li className="font-medium">
                <p className="underline">
                  via your {matchingCards[0]?.attributes?.name} card
                </p>
              </li>
            ) : null}
            {hasMatchingAlliance ? (
              <li className="font-medium">
                <p className="underline">
                  via your {matchingAlliances[0]?.attributes?.name} status
                </p>
              </li>
            ) : null}
            {hasPriorityPass ? (
              <li className="font-medium">
                <p className="underline">via Priority Pass</p>
              </li>
            ) : null}
          </ul>
          <div className="flex justify-center">
            <p className="text-xs italic max-w-40">
              As always, please check with the lounge to confirm access.
            </p>
          </div>
        </div>
      }
    >
      <SealCheck className="shrink-0" color="green" size={50} weight="fill" />
    </Tooltip>
  );
};

export default HasLoungeAccess;
