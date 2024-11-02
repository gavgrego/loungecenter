import { auth } from "@clerk/nextjs/server";
import { Card } from "@nextui-org/react";

import GoProContent from "./content";
import SignUp from "./sign-up";
import getLounges from "@/data/lounge/getLounges";

const GoProPage = async () => {
  const { sessionClaims } = auth();
  const lounges = await getLounges({ limit: 8 });
  const airportCodes = Array.from(
    new Set(
      lounges?.map(
        (lounge) => lounge?.attributes?.airport?.data?.attributes?.code
      )
    )
  ) as string[];
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="md:basis-2/3">
        <h1 className="mb-8">Go Pro!</h1>
        <p>
          A LoungeCenter Pro Membership provides a myriad of benefits for the
          serious traveler:
        </p>
        <GoProContent lounges={lounges} airportCodes={airportCodes} />
      </div>
      <aside className="md:basis-1/3 md:sticky md:top-20">
        {!sessionClaims?.userEmail ? (
          <SignUp />
        ) : (
          <Card className="p-4">
            <h2 className="font-semibold text-center">
              Thanks for being a Pro member! 🙏
            </h2>
          </Card>
        )}
      </aside>
    </div>
  );
};

export default GoProPage;
