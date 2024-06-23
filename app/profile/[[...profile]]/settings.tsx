"use client";

import { CheckboxGroup, Checkbox, Switch } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

const Settings = () => {
  const { user } = useUser();
  const hasPriorityPass = Boolean(user?.unsafeMetadata?.hasPriorityPass);

  // this feels a little delayed, so maybe use something like react query to better handle state?
  const handleToggle = async () => {
    await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(!hasPriorityPass),
    });
    await user?.reload();
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
        isSelected={Boolean(user?.unsafeMetadata?.hasPriorityPass)}
        onClick={() => handleToggle()}
      >
        Do you have Priority Pass?
      </Switch>
    </div>
  );
};

export default Settings;
