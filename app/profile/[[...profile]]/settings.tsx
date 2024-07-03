"use client";

import { CheckboxGroup, Checkbox, Switch } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

const Settings = () => {
  const { user } = useUser();
  const unsafeMetadata = user?.unsafeMetadata;

  if (!user) return null;

  const cardsSelected = user?.unsafeMetadata?.cardSelections as string[];
  const loungeMemberships = user?.unsafeMetadata?.loungeMemberships as string[];
  const hasPriorityPass = user?.unsafeMetadata?.hasPriorityPass;

  const togglePriorityPass = async () => {
    await user.update({
      unsafeMetadata: {
        ...unsafeMetadata,
        hasPriorityPass: !hasPriorityPass,
      },
    });
  };

  const handleCardSelections = async (value: string[]) => {
    await user.update({
      unsafeMetadata: {
        ...unsafeMetadata,
        cardSelections: value,
      },
    });
  };

  const handleLoungeMemberships = async (value: string[]) => {
    await user.update({
      unsafeMetadata: {
        ...unsafeMetadata,
        loungeMemberships: value,
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      <CheckboxGroup
        color="secondary"
        label="Select credit cards you have to save them to your profile:"
        value={cardsSelected}
        onChange={(value) => handleCardSelections(value)}
      >
        {/* Maybe group these if the list gets out of hand? */}
        {/* pull these in from strapi */}
        <Checkbox value="amex-plat">
          American Express Platinum (Personal or Business)
        </Checkbox>
        <Checkbox value="amex-delta-reserve">
          American Express Delta Skymiles Reserve (Personal or Business)
        </Checkbox>
        <Checkbox value="cap1-vx">Capital One Venture X</Checkbox>
        <Checkbox value="cap1-venture">Capital One Venture</Checkbox>
        <Checkbox value="cap1-spark-miles">Capital One Spark Miles</Checkbox>
        <Checkbox value="chase-reserve">Chase Sapphire Reserve</Checkbox>
        <Checkbox value="united-club">
          Chase United Club (Business or Infinite)
        </Checkbox>
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
        isDisabled
        color="secondary"
        label="Select airline alliance status you have:"
      >
        <Checkbox value="amex-plat">Oneworld Emerald</Checkbox>
        <Checkbox value="cap1-vx">Capital One Venture X</Checkbox>
        <Checkbox value="chase-reserve">Chase Sapphire Reserve</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default Settings;
