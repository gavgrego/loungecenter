"use client";

import { useUser } from "@clerk/nextjs";

import GoProContent from "./content";
import SignUp from "./sign-up";

const GoProPage = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:basis-2/3">
        <h1 className="mb-8">Go Pro!</h1>
        <p>
          A LoungeVault Pro Membership provides a myriad of benefits for the
          serious traveler.
        </p>
        <GoProContent />
      </div>
      <aside className="md:basis-1/3">
        {!user ? <SignUp /> : "Thanks for being a Pro member!"}
      </aside>
    </div>
  );
};

export default GoProPage;
