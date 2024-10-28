import { JwtPayload } from "@clerk/types";

import { Lounge } from "../api/documentation";

// this needs to just be in the utils folder
const getHasAccess = (
  loungeData: Lounge | undefined,
  sessionClaims: JwtPayload | null
) => {
  const cards = loungeData?.cards?.data || [];
  const alliances = loungeData?.alliance_access?.data || [];

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];
  const userAlliances: string[] =
    sessionClaims?.unsafeMetadata?.alliances || [];

  const hasMatchingCard = userCards.some((userCard) =>
    cards.find((card) => card.id == parseInt(userCard))
  );

  const hasMatchingAlliance = userAlliances.some((userAlliance) =>
    alliances.find((alliance) => alliance.attributes?.value == userAlliance)
  );

  const hasPriorityPass =
    loungeData?.priorityPass &&
    Boolean(sessionClaims?.unsafeMetadata?.hasPriorityPass);

  const hasLoungeAccess =
    hasMatchingCard || hasPriorityPass || hasMatchingAlliance;

  return hasLoungeAccess;
};

export default getHasAccess;
