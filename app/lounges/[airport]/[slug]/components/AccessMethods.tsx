import { Image, Tooltip } from "@nextui-org/react";

import { Lounge, LoungeCardsDataItem } from "@/data/api/documentation";
import PriortyPass from "@/public/priority-pass.jpg";

type AccessMethodsProps = {
  cards: LoungeCardsDataItem[] | undefined;
  loungeData: Lounge | undefined;
};

const AccessMethods = ({ cards, loungeData }: AccessMethodsProps) => {
  if (
    cards?.length == 0 &&
    !loungeData?.priorityPass &&
    loungeData?.alliance_access?.data?.length == 0
  )
    return null;

  return (
    <div className="contents">
      <h3 className="text-base flex flex-row">Access With:&nbsp;</h3>

      <div className="flex flex-row gap-2">
        {cards?.map((card) => {
          return (
            <Tooltip
              key={card.id}
              closeDelay={100}
              content={card.attributes?.name}
            >
              <Image
                height={24}
                radius="none"
                src={card.attributes?.icon?.data?.attributes?.url}
                width={48}
              />
            </Tooltip>
          );
        })}
        {loungeData?.priorityPass ? (
          <Tooltip
            closeDelay={100}
            content={"Priority Pass (double check access rules)"}
          >
            <Image height={25} radius="none" src={PriortyPass.src} width={50} />
          </Tooltip>
        ) : null}
        {/* Alliances */}
        {loungeData?.alliance_access?.data?.map(
          (alliance) => alliance.attributes?.name,
        )}
      </div>
    </div>
  );
};

export default AccessMethods;
