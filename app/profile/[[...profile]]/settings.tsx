"use client";

import { CheckboxGroup, Checkbox, Switch, Tooltip } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

import AlliancesList from "./alliances/alliances-list";
import { useOptimistic, startTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CardListResponse } from "@/data/api/documentation";
import { updatePriortityPass } from "./actions";
import { JwtPayload } from "@clerk/types";

type SettingsProps = {
  cards: CardListResponse;
  sessionClaims: JwtPayload | null;
};
const Settings = ({ cards, sessionClaims }: SettingsProps) => {
  const { user } = useUser();
  const { toast } = useToast();
  const unsafeMetadata = user?.unsafeMetadata;
  const cardsSelected = user?.unsafeMetadata?.cardSelections as string[];
  const loungeMemberships = user?.unsafeMetadata?.loungeMemberships as string[];
  const alliances = user?.unsafeMetadata?.alliances as string[];

  const hasPriorityPass = sessionClaims?.unsafeMetadata?.hasPriorityPass;
  const [optimisticHasPriorityPass, addOptimisticHasPriorityPass] =
    useOptimistic(
      Boolean(hasPriorityPass),
      (state: boolean, value: boolean) => value
    );

  if (!user) return null;

  const togglePriorityPass = async (value: boolean) => {
    try {
      startTransition(() => {
        addOptimisticHasPriorityPass(value);
      });
      await updatePriortityPass(value);

      toast({
        duration: 2000,
        title:
          "Success!  You've successfully updated your Priority Pass status.",
        variant: "success",
      });
    } catch {
      toast({
        duration: 2000,
        title:
          "Sorry, something went wrong.  Please refresh the page and try again.",
      });
    }
  };

  const handleCardSelections = async (value: string[]) => {
    try {
      await user.update({
        unsafeMetadata: {
          ...unsafeMetadata,
          cardSelections: value,
        },
      });
      toast({
        duration: 2000,
        title:
          "Success!  You've successfully updated your credit card selections.",
        variant: "success",
      });
    } catch {
      toast({
        duration: 2000,
        title:
          "Sorry, something went wrong.  Please refresh the page and try again.",
      });
    }
  };

  const handleLoungeMemberships = async (value: string[]) => {
    try {
      await user.update({
        unsafeMetadata: {
          ...unsafeMetadata,
          loungeMemberships: value,
        },
      });

      toast({
        duration: 2000,
        variant: "success",
        title: "Success!  You've successfully updated your lounge memberships.",
      });
    } catch {
      toast({
        duration: 2000,
        title:
          "Sorry, something went wrong.  Please refresh the page and try again.",
      });
    }
  };

  const handleAlliances = async (value: string[]) => {
    try {
      await user.update({
        unsafeMetadata: {
          ...unsafeMetadata,
          alliances: value,
        },
      });

      toast({
        duration: 2000,
        variant: "success",
        title: "Success!  You've successfully updated your alliances.",
      });
    } catch {
      toast({
        duration: 2000,
        title:
          "Sorry, something went wrong.  Please refresh the page and try again.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      <CheckboxGroup
        color="secondary"
        label="Select credit cards you have to save them to your profile:"
        value={cardsSelected}
        onChange={(value) => handleCardSelections(value)}
      >
        {cards.data?.map((card) => {
          return (
            <Checkbox key={card.id} value={String(card.id)}>
              {card.attributes?.name}
            </Checkbox>
          );
        })}
      </CheckboxGroup>

      <CheckboxGroup
        color="secondary"
        label="Do you have any lounge memberships?"
        value={loungeMemberships}
        onChange={(value) => handleLoungeMemberships(value)}
      >
        <Checkbox value="alaska">Alaska Lounge</Checkbox>
        <Checkbox value="alaska-plus">Alaska Lounge+</Checkbox>
      </CheckboxGroup>

      <Tooltip
        closeDelay={100}
        content="Note: Depending on your Priority Pass tier entrance fees may apply"
        offset={20}
      >
        <Switch
          color="secondary"
          isSelected={optimisticHasPriorityPass}
          onValueChange={(value: boolean) => togglePriorityPass(value)}
        >
          Do you have Priority Pass?
        </Switch>
      </Tooltip>

      {/* TODO: Flesh this out, organize by airline alliance in 3 columns */}
      <AlliancesList value={alliances} onChange={handleAlliances} />
    </div>
  );
};

export default Settings;
