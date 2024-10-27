import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Divider } from "@nextui-org/react";

import Settings from "./settings";
import ManageAccount from "./manage-account";

import getCards from "@/data/card/getCards";

const ProfilePage = async () => {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    redirect("/");
  }

  const cards = await getCards();

  return (
    // this page will contain the user's profile information
    //
    // The user can select which cards they have that might provide lounge access (plat, cap1, chase, priority pass, etc)
    // The user can link their pro account to discord
    // The user can change email, password, etc

    // Ideally, this will be done w/ server actions or API routes via checks, toggles, etc
    <div>
      <h1>Profile</h1>
      <p>
        Adjust your personal profile by setting what cards and programs you
        have, making finding accessible lounges a breeze.
      </p>

      {/* TODO: better loading state for this */}
      <Settings cards={cards} sessionClaims={sessionClaims} />
      <Divider className="my-6" />
      <ManageAccount />
    </div>
  );
};

export default ProfilePage;
