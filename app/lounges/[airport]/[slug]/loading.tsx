import { Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="basis-full md:basis-2/3 max-md:order-2 flex flex-col gap-3">
        <Skeleton className="rounded-lg">
          <div className="h-[20px] rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg mt-4">
          <div className="h-[200px] rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg mt-4">
          <div className="h-[300px] rounded-lg bg-default-300" />
        </Skeleton>
      </div>
      <aside className="basis-full md:basis-1/3 max-md:hidden block">
        <Skeleton className="rounded-lg mt-4">
          <div className="h-[400px] rounded-lg bg-default-300" />
        </Skeleton>
      </aside>
    </div>
  );
};

export default Loading;
