"use client";

import { CheckboxGroup, Checkbox, Switch } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

const Settings = () => {
  const { user } = useUser();
  const hasPriorityPass = user?.unsafeMetadata?.hasPriorityPass;

  if (!user) return null;

  const togglePriorityPass = async () => {
    await user.update({
      unsafeMetadata: {
        hasPriorityPass: !hasPriorityPass,
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      <CheckboxGroup
        color="secondary"
        label="Select credit cards you have to save them to your profile:"
      >
        <Checkbox value="amex-plat">
          American Express Platinum (Personal or Business)
        </Checkbox>
        <Checkbox value="cap1-vx">Capital One Venture X</Checkbox>
        <Checkbox value="chase-reserve">Chase Sapphire Reserve</Checkbox>
        <Checkbox value="united-club">
          Chase United Club (Business or Infinite)
        </Checkbox>
      </CheckboxGroup>

      <Switch
        color="secondary"
        isSelected={Boolean(hasPriorityPass)}
        onClick={() => togglePriorityPass()}
      >
        Do you have Priority Pass?
      </Switch>

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
