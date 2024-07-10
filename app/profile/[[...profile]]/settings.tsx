"use client";

import { CheckboxGroup, Checkbox, Switch, Tooltip } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

import { useToast } from "@/components/ui/use-toast";
import { CardListResponse } from "@/data/api/documentation";
type SettingsProps = {
  cards: CardListResponse;
};
const Settings = ({ cards }: SettingsProps) => {
  const { user } = useUser();
  const { toast } = useToast();
  const unsafeMetadata = user?.unsafeMetadata;

  if (!user) return null;

  const cardsSelected = user?.unsafeMetadata?.cardSelections as string[];
  const loungeMemberships = user?.unsafeMetadata?.loungeMemberships as string[];
  const hasPriorityPass = user?.unsafeMetadata?.hasPriorityPass;

  const togglePriorityPass = async () => {
    try {
      await user.update({
        unsafeMetadata: {
          ...unsafeMetadata,
          hasPriorityPass: !hasPriorityPass,
        },
      });
      toast({
        title:
          "Success!  You've successfully updated your Priority Pass status",
        variant: "success",
      });
    } catch {
      toast({
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
        title:
          "Success!  You've successfully updated your credit card selections",
        variant: "success",
      });
    } catch {
      toast({
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
        variant: "success",
        title: "Success!  You've successfully updated your lounge memberships",
      });
    } catch {
      toast({
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

      <Switch
        color="secondary"
        isSelected={Boolean(hasPriorityPass)}
        onClick={() => togglePriorityPass()}
      >
        Do you have Priority Pass?
      </Switch>

      {/* TODO: Flesh this out, organize by airline alliance in 3 columns */}
      <CheckboxGroup
        color="secondary"
        label="Select airline alliance status you have:"
      >
        <Checkbox value="oneworld-emerald">
          <Tooltip
            closeDelay={100}
            content={
              <ul className="list-disc pl-4 [&>li]:pb-1 px-3 pt-3 pb-2">
                <li>Alaska MVP Gold 75k/100k</li>
                <li>AAdvantage Platinum Pro/Executive Platinum</li>
                <li>BA Executive Club Gold</li>
                <li>Cathay Diamond</li>
                <li>Finnair Plus Platinum/Lumo</li>
              </ul>
            }
          >
            Oneworld Emerald
          </Tooltip>
        </Checkbox>
        <Checkbox value="oneworld-sapphire">
          <Tooltip
            closeDelay={100}
            content="Alaska MVP Gold, AAdvantage Platinum, BA Executive Club Silver, Cathay Gold, Finnair Plus Gold"
          >
            Oneworld Sapphire
          </Tooltip>
        </Checkbox>
        <Checkbox value="cap1-vx">Skyteam Elite Plus</Checkbox>
        <Checkbox value="chase-reserve">Star Alliance Gold</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default Settings;
